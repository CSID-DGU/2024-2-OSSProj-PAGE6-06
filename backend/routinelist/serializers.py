from rest_framework import serializers
from .models import *

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content']  # 모든 필드 포함

    def create(self, validated_data):
        # validated_data에서 'user' 필드를 제거하고, 현재 사용자 설정
        user = validated_data.pop('user', None)
        routine = Routine.objects.create(user=self.context['request'].user, **validated_data)
        return routine
