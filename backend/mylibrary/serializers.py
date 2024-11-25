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

class RoutineCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineComplete
        fields = ['id', 'date', 'location', 'memo']

class UserBookSerializer(serializers.ModelSerializer):
    routines = RoutineCompleteSerializer(source='book.routinecomplete_set', many=True)
    
    class Meta:
        model = UserBook
        fields = ['book', 'routines']

class RoutineCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineComplete
        fields = '__all__'
        
class UserBookSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='book.id', read_only=True)
    title = serializers.CharField(source='book.title')
    author = serializers.CharField(source='book.author')
    coverImage = serializers.URLField(source='book.coverImage')

    class Meta:
        model = UserBook
        fields = ['id', 'title', 'author', 'coverImage']
