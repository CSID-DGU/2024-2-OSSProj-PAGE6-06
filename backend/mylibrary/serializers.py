# mylibrary/serializers.py

from rest_framework import serializers
from .models import Book, RoutineRecord

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publisher', 'category', 'cover_image']

class RoutineRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineRecord
        fields = ['id', 'book', 'completed_date']
