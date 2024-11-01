# mylibrary/views.py

import requests
from django.conf import settings
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from .models import Book, RoutineRecord
from .serializers import BookSerializer, RoutineRecordSerializer

@api_view(['GET'])
def search_books(request):
    query = request.GET.get('q')  # 검색어를 쿼리 파라미터에서 가져옴
    if query:
        api_key = settings.ALADIN_API_KEY  # settings에서 API 키 가져오기
        url = f'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey={api_key}&Query={query}&QueryType=Title&MaxResults=1&SearchTarget=Book&output=js&Version=20131101'
        
        # API 호출
        response = requests.get(url)
        if response.status_code != 200:
            return Response({"error": "알라딘 API 호출에 실패했습니다."}, status=response.status_code)

        # API 응답 데이터 가져오기
        data = response.json()
        books_data = data.get('item', [])
        if not books_data:
            return Response({"error": "검색 결과가 없습니다."}, status=404)

        # 첫 번째 책 정보만 가져오기 (필요시 다수 항목도 처리 가능)
        book_data = books_data[0]
        
        # 카테고리 정보 추출 (예: 2Depth 카테고리 이름)
        category_name = data.get('searchCategoryName', '카테고리 없음')  # 예시로 상위 카테고리 추출

        # 데이터베이스에 저장
        book, created = Book.objects.get_or_create(
            title=book_data['title'],
            author=book_data.get('author', '저자 정보 없음'),
            publisher=book_data.get('publisher', '출판사 정보 없음'),
            category=category_name,  # 추출된 카테고리 이름으로 저장
            cover_image=book_data.get('cover', '')
        )

        # 저장된 Book 데이터를 직렬화
        serializer = BookSerializer(book)
        return Response(serializer.data)
    else:
        return Response({"error": "검색어가 필요합니다."}, status=400)

# 책 관련 뷰셋 추가
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    # 알라딘 API를 통해 책 추가하기
    @action(detail=False, methods=['post'], url_path='add-from-api')
    def add_from_api(self, request):
        query = request.data.get('q')
        if not query:
            return Response({"error": "검색어를 제공해주세요."}, status=status.HTTP_400_BAD_REQUEST)

        api_key = settings.ALADIN_API_KEY
        url = f'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey={api_key}&Query={query}&QueryType=Title&MaxResults=1&SearchTarget=Book&output=js&Version=20131101'
        response = requests.get(url)
        if response.status_code != 200:
            return Response({"error": "알라딘 API 호출 실패"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        data = response.json()
        book_data = data.get('item', [])[0]
        
        # 카테고리 정보 추출 (예: 2Depth 카테고리 이름)
        category_name = data.get('searchCategoryName', '카테고리 없음')  # 상위 카테고리 추출

        # 데이터베이스에 저장
        book, created = Book.objects.get_or_create(
            title=book_data['title'],
            author=book_data.get('author', '저자 정보 없음'),
            publisher=book_data.get('publisher', '출판사 정보 없음'),
            category=category_name,  # 추출된 카테고리 이름으로 저장
            cover_image=book_data.get('cover', '')
        )

        serializer = self.get_serializer(book)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

# 루틴 완료 기록 뷰셋 추가
class RoutineRecordViewSet(viewsets.ModelViewSet):
    queryset = RoutineRecord.objects.all()
    serializer_class = RoutineRecordSerializer

    # 루틴 완료 기록 삭제
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
