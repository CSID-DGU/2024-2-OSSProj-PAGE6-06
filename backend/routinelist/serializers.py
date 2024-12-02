from rest_framework import serializers
from .models import *
from mylibrary.models import Book

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content', 'is_club']

    def create(self, validated_data):
        # validated_data에서 'user' 필드를 제거하고, 현재 사용자 설정
        user = validated_data.pop('user', None)
        routine = Routine.objects.create(user=self.context['request'].user, **validated_data)
        return routine


# BookSerializer 정의
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title']  # 필요에 따라 book에 대한 다른 필드를 추가할 수 있습니다.

# RoutineCompleteSerializer 수정
class RoutineCompleteSerializer(serializers.ModelSerializer):
    userNickname = serializers.CharField(source='user.nickname', read_only=True)
    
    # title을 통해 book을 선택할 수 있도록 수정
    title = serializers.CharField(write_only=True)  # title 필드 추가 (book title을 받기 위한 필드)
    book = BookSerializer(read_only=True)  # book 필드는 BookSerializer를 통해 직렬화하여 반환

    class Meta:
        model = RoutineComplete
        fields = ['id', 'routine', 'user', 'userNickname', 'date', 'title', 'location', 'memo', 'book']
        read_only_fields = ['date', 'user', 'book']  # book 필드는 읽기 전용

    def validate_title(self, value):
        # 현재 사용자가 작성한 Book만 선택할 수 있도록 필터링
        user = self.context['request'].user
        try:
            book = Book.objects.get(user=user, title=value)  # 현재 사용자가 생성한 책의 title을 통해 book 찾기
        except Book.DoesNotExist:
            raise serializers.ValidationError("해당 제목의 책을 찾을 수 없습니다.")
        return value

    def create(self, validated_data):
        # title을 통해 book을 조회하여 validated_data에 book을 추가
        title = validated_data.pop('title')
        user = self.context['request'].user
        try:
            book = Book.objects.get(user=user, title=title)  # 사용자가 만든 책을 찾아 book 필드에 추가
        except Book.DoesNotExist:
            raise serializers.ValidationError("해당 제목의 책을 찾을 수 없습니다.")
        
        validated_data['book'] = book  # book을 validated_data에 추가

        routine_completion = RoutineComplete.objects.create(**validated_data)
        return routine_completion
