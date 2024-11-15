# mylibrary/serializers.py

from rest_framework import serializers
from .models import Book, UserBook
from routinelist.models import RoutineComplete

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'publisher', 'coverImage', 'summary']

# class RoutineRecordSerializer(serializers.ModelSerializer):
#         book_title = serializers.CharField(source='book.title', read_only=True)
#         class Meta:
#              model = RoutineRecord
#              fields = ['bookTitle']

class RoutineCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineComplete
        fields = '__all__'
        
class UserBookSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source='book.title')
    author = serializers.CharField(source='book.author')
    coverImage = serializers.URLField(source='book.coverImage')

    class Meta:
        model = UserBook
        fields = ['title', 'author', 'coverImage']
