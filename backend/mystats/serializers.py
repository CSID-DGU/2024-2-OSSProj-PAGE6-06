# serializers.py 
from rest_framework import serializers
from routinelist.models import Routine, RoutineComplete

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = ['id', 'title', 'time', 'content', 'is_club']

class RoutineCompleteSerializer(serializers.ModelSerializer):
    routine = RoutineSerializer(read_only=True)  # Routine 정보를 포함시키는 필드 추가

    class Meta:
        model = RoutineComplete
        fields = ['id', 'date', 'routine', 'location', 'memo']
