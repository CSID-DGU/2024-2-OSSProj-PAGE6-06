from rest_framework import serializers
from mylibrary.models import UserBook, Book
from clublist.models import Club, UserJoinedRoutine
from routinelist.models import RoutineComplete

# Book 모델을 위한 시리얼라이저
class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'coverImage', 'summary']

# UserBook 모델을 위한 시리얼라이저
class BookSerializer(serializers.ModelSerializer):
    book = BookDetailSerializer(read_only=True)
    read_count = serializers.SerializerMethodField()

    class Meta:
        model = UserBook
        fields = ['book', 'read_count']

    def get_read_count(self, obj):
        # 임의로 read_count 값을 반환, 필요에 따라 적절한 로직으로 변경
        return obj.book.read_count if hasattr(obj.book, 'read_count') else 0

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
