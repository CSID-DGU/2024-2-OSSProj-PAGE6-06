# mylibrary/serializers.py

from rest_framework import serializers
from .models import Book, RoutineRecord

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publisher', 'category', 'cover_image', 'summary']

class RoutineRecordSerializer(serializers.ModelSerializer):
        book_title = serializers.CharField(source='book.title', read_only=True)
        book_summary = serializers.CharField(source='book.summary', read_only=True)
        class Meta:
             model = RoutineRecord
             fields = ['book_title', 'book_summary']
