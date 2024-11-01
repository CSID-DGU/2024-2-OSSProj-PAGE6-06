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

        # 첫 번째 책 정보만 가져오기
        book_data = books_data[0]
        
        # 카테고리 정보 추출
        category_name = data.get('searchCategoryName', '카테고리 없음')

        # 데이터베이스에 저장 (초기 summary는 빈 문자열로 설정)
        book, created = Book.objects.get_or_create(
            title=book_data['title'],
            author=book_data.get('author', '저자 정보 없음'),
            publisher=book_data.get('publisher', '출판사 정보 없음'),
            category=category_name,
            cover_image=book_data.get('cover', ''),
            summary=''  # 초기 summary는 빈 문자열
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

        # 카테고리 정보 추출
        category_name = data.get('searchCategoryName', '카테고리 없음')

        # 데이터베이스에 저장 (초기 summary는 빈 문자열로 설정)
        book, created = Book.objects.get_or_create(
            title=book_data['title'],
            author=book_data.get('author', '저자 정보 없음'),
            publisher=book_data.get('publisher', '출판사 정보 없음'),
            category=category_name,
            cover_image=book_data.get('cover', ''),
            summary=''  # 초기 summary는 빈 문자열
        )

        serializer = self.get_serializer(book)
        return Response(serializer.data, status=status.HTTP_201_CREATED if created else status.HTTP_200_OK)

# 루틴 완료 기록 뷰셋 추가
class RoutineRecordViewSet(viewsets.ModelViewSet):
    queryset = RoutineRecord.objects.filter(is_deleted=False)  # 활성화된 루틴 기록만 조회
    serializer_class = RoutineRecordSerializer

    @action(detail=True, methods=['delete'])
    def soft_delete(self, request, pk=None):
        try:
            routine_record = self.get_object()
            routine_record.is_deleted = True  # 소프트 삭제
            routine_record.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except RoutineRecord.DoesNotExist:
            return Response({"error": "루틴 기록을 찾을 수 없습니다."}, status=status.HTTP_404_NOT_FOUND)

# 책의 summary를 업데이트하는 API 메서드 추가
@api_view(['PATCH'])
def update_summary(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
        summary = request.data.get('summary', None)  # 요청에서 summary 가져오기
        if summary is not None:
            book.summary = summary  # summary 업데이트
            book.save()
            return Response({"message": "감상평이 성공적으로 저장되었습니다."}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "감상평을 입력해주세요."}, status=status.HTTP_400_BAD_REQUEST)
    except Book.DoesNotExist:
        return Response({"error": "책을 찾을 수 없습니다."}, status=status.HTTP_404_NOT_FOUND)
