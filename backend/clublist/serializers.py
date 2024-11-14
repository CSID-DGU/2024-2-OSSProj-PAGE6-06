from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
from routinelist.models import Routine
# Create your views here.
class ClubSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    userNickname = serializers.CharField(source='user.nickname', read_only=True)
    participantCount = serializers.SerializerMethodField()
    # imageURL = serializers.SerializerMethodField()  # 이미지 경로 필드 추가

    class Meta:
        model = Club
        fields = '__all__'

    def get_participantCount(self, obj):
        return UserJoinedRoutine.objects.filter(club=obj).count()

    def get_imageURL(self, obj):
        # 이미지의 전체 URL 반환
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

    def create(self, validated_data):
        user = validated_data.pop('user', None)
        club = Club.objects.create(user=self.context['request'].user, **validated_data)
        return club


class UserJoinedRoutineSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=get_user_model().objects.all())  
    club = serializers.PrimaryKeyRelatedField(queryset=Club.objects.all()) 
    personalRoutine = serializers.PrimaryKeyRelatedField(queryset=Routine.objects.all(), required=False, allow_null=True)
    joinedAt = serializers.DateTimeField(read_only=True)

    class Meta:
        model = UserJoinedRoutine
        fields = ['id', 'user', 'club', 'personalRoutine', 'joinedAt']