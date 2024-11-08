from rest_framework import serializers
from .models import *

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content', 'is_club']  # 모든 필드 포함

    def create(self, validated_data):
        # validated_data에서 'user' 필드를 제거하고, 현재 사용자 설정
        user = validated_data.pop('user', None)
        routine = Routine.objects.create(user=self.context['request'].user, **validated_data)
        return routine


class RoutineCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoutineComplete
        fields = ['id', 'routine', 'user', 'date', 'title', 'location', 'memo']
        read_only_fields = ['date', 'user']  # 완료 날짜와 사용자 필드는 자동 설정

    def create(self, validated_data):
        # user 필드를 현재 요청한 사용자로 설정
        validated_data['user'] = self.context['request'].user
        routine_completion = RoutineComplete.objects.create(**validated_data)
        return routine_completion
