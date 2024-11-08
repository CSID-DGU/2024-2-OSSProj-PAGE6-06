from rest_framework import serializers
from routinelist.models import Routine, RoutineComplete

class RoutineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Routine
        fields = '__all__'

class RoutineCompleteSerializer(serializers.ModelSerializer):
    routine = RoutineSerializer(read_only=True)

    class Meta:
        model = RoutineComplete
        fields = '__all__'
