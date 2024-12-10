from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.db.models import Count  # Count 임포트
from .serializers import BookSerializer, ClubSerializer, PlaceSerializer
from mylibrary.models import UserBook
from clublist.models import UserJoinedRoutine
from routinelist.models import RoutineComplete

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def main_page_data(request):
    # 클럽 데이터
    user_clubs = UserJoinedRoutine.objects.filter(user=request.user).select_related('club')
    clubs = [ujr.club for ujr in user_clubs]
    club_serializer = ClubSerializer(clubs, many=True, context={'request': request})

    # 장소 데이터
    top_places = RoutineComplete.objects.values('location') \
                .annotate(location_count=Count('id')).order_by('-location_count')[:5]
    place_serializer = PlaceSerializer(top_places, many=True)

     # 모든 사용자의 상위 5권 책 데이터
    top_books = UserBook.objects.values(
        'book__title', 'book__author', 'book__coverImage', 'book__summary'
    ).annotate(
        read_count=Count('book')
    ).order_by('-read_count')[:5]
   
    book_serializer = BookSerializer(top_books, many=True)

    return Response({
        'userclubs': club_serializer.data,
        'topplaces': place_serializer.data,
        'topbooks': book_serializer.data,
    })
