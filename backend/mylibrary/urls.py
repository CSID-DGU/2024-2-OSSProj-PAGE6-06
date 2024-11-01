# mylibrary/urls.py
from django.urls import path, include  # path와 include 임포트
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, RoutineRecordViewSet, search_books

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'routines', RoutineRecordViewSet)

urlpatterns = [
    path('books/search/', search_books, name='search_books'),
] + router.urls
