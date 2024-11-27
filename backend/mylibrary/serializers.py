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

class SimpleBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title'] 


class RoutineCompleteSerializer(serializers.ModelSerializer):
    userNickname = serializers.CharField(source='user.nickname', read_only=True)
    title = serializers.CharField(write_only=True, required=False)
    book = SimpleBookSerializer(read_only=True)  

    class Meta:
        model = RoutineComplete
        fields = ['id', 'routine', 'user', 'userNickname', 'date', 'location', 'memo', 'book', 'title']
        read_only_fields = ['date', 'user', 'book']

    def update(self, instance, validated_data):
        title = validated_data.pop('title', None)
        if title:
            try:
                book = Book.objects.get(user=self.context['request'].user, title=title)
                instance.book = book
            except Book.DoesNotExist:
                raise serializers.ValidationError("해당 제목의 책을 찾을 수 없습니다.")
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance



class UserBookSerializer(serializers.ModelSerializer):
    routines = RoutineCompleteSerializer(source='book.routinecomplete_set', many=True)
    
    class Meta:
        model = UserBook
        fields = ['book', 'routines']

        
class UserBookSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='book.id', read_only=True)
    title = serializers.CharField(source='book.title')
    author = serializers.CharField(source='book.author')
    coverImage = serializers.URLField(source='book.coverImage')

    class Meta:
        model = UserBook
        fields = ['id', 'title', 'author', 'coverImage']
