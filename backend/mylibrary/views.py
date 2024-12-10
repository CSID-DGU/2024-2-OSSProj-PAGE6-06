# mylibrary/views.py
import requests
from django.conf import settings
from rest_framework import  status
from rest_framework.response import Response
from rest_framework.decorators import api_view,  permission_classes
from .models import Book, UserBook
from .serializers import BookSerializer, RoutineCompleteSerializer, UserBookSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from routinelist.models import RoutineComplete


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
@permission_classes([IsAuthenticated])
def save_selected_book(request):
    book_serializer = BookSerializer(data=request.data, context={'request': request})
    if book_serializer.is_valid():
        book = book_serializer.save()  # 책 객체 저장
        UserBook.objects.create(user=request.user, book=book)  # UserBook 인스턴스 생성 및 저장
        return Response(book_serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(book_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 루틴 수정 및 삭제 기능
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def routine_complete_detail(request, routineCompleteId):
    routine_complete = get_object_or_404(RoutineComplete, pk=routineCompleteId, user=request.user)
    
    if request.method == 'GET':
        serializer = RoutineCompleteSerializer(routine_complete)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = RoutineCompleteSerializer(routine_complete, data=request.data, partial=True, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        routine_complete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# 사용자 별 저장된 책 조회
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_books(request):
    # 사용자와 연결된, 삭제되지 않은 책만 조회
    user_books = UserBook.objects.filter(user=request.user, book__is_deleted=False).select_related('book')
    serializer = UserBookSerializer(user_books, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_book_routines(request, book_id):
    # 특정 책에 대한 UserBook 인스턴스를 조회
    user_book = get_object_or_404(UserBook, book_id=book_id, user=request.user, book__is_deleted=False)
    
    # 해당 책과 관련된 루틴 완료 기록 조회
    routine_completes = RoutineComplete.objects.filter(book=user_book.book, user=request.user)
    serializer = RoutineCompleteSerializer(routine_completes, many=True)
    
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_book(request, book_id):
    try:
        book = Book.objects.get(id=book_id, user=request.user, is_deleted=False)
        book.is_deleted = True
        book.save()
        return Response({'message': '책 삭제 완료.'}, status=status.HTTP_200_OK)
    except Book.DoesNotExist:
        return Response({'error': '책을 찾을 수 없습니다.'}, status=status.HTTP_404_NOT_FOUND)
