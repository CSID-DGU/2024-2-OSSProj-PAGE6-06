# mylibrary/views.py

import requests
from django.conf import settings
from rest_framework import  status
from rest_framework.response import Response
from rest_framework.decorators import api_view,  permission_classes
from .models import Book
from .serializers import BookSerializer
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def search_books(request):
    query = request.GET.get('q')
    if query:
        api_key = settings.ALADIN_API_KEY
        url = f"http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey={api_key}&Query={query}&QueryType=Title&MaxResults=10&SearchTarget=Book&output=js&Version=20131101"
        
        response = requests.get(url)
        if response.status_code != 200:
            return Response({"error": "알라딘 API 호출에 실패했습니다."}, status=response.status_code)

        books_data = response.json().get('item', [])
        if not books_data:
            return Response({"error": "검색 결과가 없습니다."}, status=404)

        # 검색된 책 정보만 클라이언트에 반환
        results = [BookSerializer(Book(title=book['title'],
                                       author=book.get('author', '저자 정보 없음'),
                                       publisher=book.get('publisher', '출판사 정보 없음'),
                                       coverImage=book.get('cover', ''),
                                       summary=book.get('description', ''))).data for book in books_data]
        return Response(results)
    else:
        return Response({"error": "검색어가 필요합니다."}, status=400)

# 선택한 책 한권만 db로 저장
@api_view(['POST'])
def save_selected_book(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # 책 관련 뷰셋 추가
# class BookViewSet(viewsets.ModelViewSet):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer

#     @action(detail=False, methods=['post'], url_path='add-book')
#     def add_book(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data, many=True)  # 여러 개의 책 데이터를 받기 때문에 many=True 설정
#         serializer.is_valid(raise_exception=True)
#         self.perform_create(serializer, *args, **kwargs)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
#     def perform_create(self, serializer):
#         serializer.save()