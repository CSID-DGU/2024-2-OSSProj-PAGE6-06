from rest_framework import serializers
from mylibrary.models import UserBook, Book
from clublist.models import Club, UserJoinedRoutine
from routinelist.models import RoutineComplete
from django.db.models import Count 

# Book 모델을 위한 시리얼라이저
class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'coverImage', 'summary']

# # UserBook 모델을 위한 시리얼라이저
top_books = UserBook.objects.select_related('book').annotate(read_count=Count('book')).order_by('-read_count')[:5]

class BookSerializer(serializers.Serializer):
    title = serializers.CharField(source='book__title')
    author = serializers.CharField(source='book__author')
    coverImage = serializers.URLField(source='book__coverImage')
    summary = serializers.CharField(source='book__summary')
    read_count = serializers.IntegerField()


# Club 모델을 위한 시리얼라이저
class ClubSerializer(serializers.ModelSerializer):
    participantCount = serializers.SerializerMethodField()  # 참여자 수 계산
    imageURL = serializers.SerializerMethodField()  # 이미지 URL 처리

    class Meta:
        model = Club
        fields = ['id', 'title', 'time', 'content', 'imageURL', 'participantCount', 'createdAt']

    def get_participantCount(self, obj):
        # 올바른 필드를 참조하여 참여자 수 계산
        return UserJoinedRoutine.objects.filter(club=obj).count()

    def get_imageURL(self, obj):
        # 이미지의 전체 URL 반환
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

    
# 장소 모델을 위한 시리얼라이저
class PlaceSerializer(serializers.Serializer):
    model=RoutineComplete
    location = serializers.CharField(max_length=100)
    location_count = serializers.IntegerField()
