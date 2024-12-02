# serializers.py
from rest_framework import serializers
from routinelist.models import Routine, RoutineComplete, Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book  # Book 모델
        fields = ['title']  # 필요한 필드만 선택 (예: title)

class RoutineCompleteSerializer(serializers.ModelSerializer):
    book = BookSerializer(read_only=True)  # Book 모델의 title을 가져오기 위해 사용

    class Meta:
        model = RoutineComplete
        fields = ['id', 'date', 'routine', 'book', 'location', 'memo']

class RoutineSerializer(serializers.ModelSerializer):
    completions = RoutineCompleteSerializer(many=True, read_only=True, source='routinecomplete_set')
    
    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content', 'is_club', 'completions']

# 중첩된 completions 필드 제거를 위한 RoutineSerializer
class RoutineSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content', 'is_club']

class MonthlyRoutineCompleteSerializer(serializers.ModelSerializer):
    routine = RoutineSimpleSerializer(read_only=True)
    book = BookSerializer(read_only=True)  # Book 모델의 title을 가져오기 위해 사용

    class Meta:
        model = RoutineComplete
        fields = ['id', 'date', 'routine', 'book', 'location', 'memo']