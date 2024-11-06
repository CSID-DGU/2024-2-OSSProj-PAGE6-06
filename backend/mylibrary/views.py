# mylibrary/views.py

import requests
from django.conf import settings
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from .models import Book
from .serializers import BookSerializer


@api_view(['GET'])
def search_books(request):
    query = request.GET.get('q')
    if query:
        api_key = settings.ALADIN_API_KEY
        url = f'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey={api_key}&Query={query}&QueryType=Title&MaxResults=10&SearchTarget=Book&output=js&Version=20131101'
        
        response = requests.get(url)
        if response.status_code != 200:
            return Response({"error": "알라딘 API 호출에 실패했습니다."}, status=response.status_code)

        data = response.json()
        books_data = data.get('item', [])
        if not books_data:
            return Response({"error": "검색 결과가 없습니다."}, status=404)

        results = []
        for book_data in books_data:
            # 책 요약 정보 추출 (API 응답 구조에 따라 필드명 확인 필요)
            summary = book_data.get('description', '')  # 'description' 필드명은 예시일 뿐, 실제 응답 필드명 확인 필요
            book, created = Book.objects.get_or_create(
                title=book_data['title'],
                author=book_data.get('author', '저자 정보 없음'),
                publisher=book_data.get('publisher', '출판사 정보 없음'),
                coverImage=book_data.get('cover', ''),
                summary=summary  # 요약 정보 저장
            )
            serializer = BookSerializer(book)
            results.append(serializer.data)

        return Response(results)
    else:
        return Response({"error": "검색어가 필요합니다."}, status=400)


# 책 관련 뷰셋 추가
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        # 추가적인 로직을 여기에 구현할 수 있습니다, 예를 들어:
        # serializer.save(user=self.request.user)
        serializer.save()
