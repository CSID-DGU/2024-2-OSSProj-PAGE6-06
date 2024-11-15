from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView
from routinelist.serializers import *
from django.db.models import Q

class ClubCreateAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = ClubSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            club = serializer.save(user=request.user)
            
            # 본인의 Routine 리스트에 클럽 루틴 추가
            Routine.objects.create(
                user=request.user,
                title=club.title,
                time=club.time,
                content=club.content,
                is_club=True  
            )
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ClubDetailAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, club_id):
        club = get_object_or_404(Club, id=club_id)
        serializer = ClubSerializer(club, context={'request': request})  # context 추가
        
        club_routines = Routine.objects.filter(club=club)
        routine_complete_records = RoutineComplete.objects.filter(routine__in=club_routines)
        routine_complete_serializer = RoutineCompleteSerializer(routine_complete_records, many=True)

        return Response({
            "club": serializer.data,
            "routineCompleteRecords": routine_complete_serializer.data
        }, status=status.HTTP_200_OK)



class ClubRoutineListAPIView(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ClubSerializer

    def get_queryset(self):
        return Club.objects.all()


class JoinClubAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, club_id):
        club = get_object_or_404(Club, id=club_id)

        if club.user == request.user:
            return Response({"error": "본인이 생성한 루틴에는 참여할 수 없습니다."}, status=status.HTTP_400_BAD_REQUEST)
        
        if UserJoinedRoutine.objects.filter(user=request.user, club=club).exists():
            return Response({"error": "이미 이 클럽에 참여하셨습니다."}, status=status.HTTP_400_BAD_REQUEST)

        personal_routine_id = request.data.get('personalRoutine')
        personal_routine = None

        if personal_routine_id:
            personal_routine = get_object_or_404(Routine, id=personal_routine_id, user=request.user)
        else:
            personal_routine = Routine.objects.create(
                user=request.user,
                title=club.title,
                time=club.time, 
                content=club.content, 
                is_club=True,
                club=club 
            )

        user_joined_routine = UserJoinedRoutine.objects.create(
            user=request.user,
            club=club,
            personalRoutine=personal_routine
        )

        serializer = UserJoinedRoutineSerializer(user_joined_routine)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ClubSearchAPIView(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ClubSerializer

    def get_queryset(self):
        queryset = Club.objects.all()
        search_query = self.request.query_params.get('q', None)

        if search_query:
            queryset = queryset.filter(Q(title__icontains=search_query))
            print(f"Search Query: {search_query}")  # 검색어 확인용
            print(f"Filtered Queryset: {queryset}")  # 필터된 쿼리셋 출력
        return queryset