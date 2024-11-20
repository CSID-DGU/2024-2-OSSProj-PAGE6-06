# mylibrary/urls.py
from django.urls import path
from .views import search_books, save_selected_book, routine_complete_detail, user_books, delete_book

urlpatterns = [
    path('books/search/', search_books, name='search_books'),  # 책 검색 API
    path('books/save/', save_selected_book, name='save_selected_book'),  # 선택된 책 저장 API
    path('books/routines/<int:routineCompleteId>/', routine_complete_detail, name='routine_complete_detail'),  # 루틴 조회, 수정, 삭제 API
    path('books/user/', user_books, name='user_books'),  # 사용자 책 목록 조회 API
    path('books/delete/<int:book_id>/', delete_book, name='delete_book'),  # 책 삭제 API
]