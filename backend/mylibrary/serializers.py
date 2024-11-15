# mylibrary/serializers.py

from rest_framework import serializers
from .models import Book, UserBook
from routinelist.models import RoutineComplete

class BookSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Book
        fields = ['id', 'user', 'title', 'author', 'publisher', 'coverImage', 'summary']

    def create(self, validated_data):
        # 요청을 보낸 사용자를 자동으로 할당
        user = self.context['request'].user  # 요청에서 현재 인증된 사용자 가져오기
        validated_data['user'] = user  # user 필드에 할당
        return super().create(validated_data)

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
