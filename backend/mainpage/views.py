from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import BookSerializer, ClubSerializer, PlaceSerializer
from django.db.models import Count
from mylibrary.models import UserBook
from clublist.models import Club
from routinelist.models import RoutineComplete

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def main_page_data(request):
    # 사용자가 참여 중인 클럽
    user_clubs = Club.objects.filter(participants__user=request.user)
    
    # 가장 인기 있는 장소 상위 5개
    top_places = RoutineComplete.objects.values('location') \
                .annotate(location_count=Count('id')).order_by('-location_count')[:5]
                
    # UserBook을 통한 상위 5권의 책 정보
    top_books = UserBook.objects.filter(user=request.user) \
                .select_related('book') \
                .annotate(read_count=Count('id')).order_by('-read_count')[:5]

    # 시리얼라이저를 이용한 데이터 직렬화
    book_serializer = BookSerializer(top_books, many=True)
    club_serializer = ClubSerializer(user_clubs, many=True)
    place_serializer = PlaceSerializer(top_places, many=True)

    return Response({
        'userclubs': club_serializer.data,
        'topplaces': place_serializer.data,
        'topbooks': book_serializer.data,
    })
