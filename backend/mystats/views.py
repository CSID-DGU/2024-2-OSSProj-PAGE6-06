# mystats/views.py 
from django.utils.dateparse import parse_date
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from routinelist.models import Routine, RoutineComplete
from mystats.serializers import RoutineCompleteSerializer, RoutineSerializer

class RoutinesByDateAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        date_str = request.query_params.get('date')
        date = parse_date(date_str)  # YYYY-MM-DD 형식으로 파싱
        if not date:
            return Response({"error": "Invalid date format. Please use YYYY-MM-DD format."}, status=400)

        # 특정 날짜에 해당하는 모든 RoutineComplete 조회
        routines = RoutineComplete.objects.filter(date__date=date, user=request.user)
        serializer = RoutineCompleteSerializer(routines, many=True)
        return Response(serializer.data)


class RoutineRecordView(APIView):
    permission_classes = [IsAuthenticated] 
 
    def get(self, request, routine):
        if routine == "all":
            # 모든 루틴과 그에 따른 완료 기록을 가져오기
            routines = Routine.objects.filter(user=request.user)
            serializer = RoutineSerializer(routines, many=True)
            return Response(serializer.data)
        
        else:
            # 특정 routine_id에 해당하는 Routine 및 관련 모든 RoutineComplete 조회
            try:
                routine_obj = Routine.objects.get(id=routine, user=request.user)
            except Routine.DoesNotExist:
                return Response({"error": "Routine not found"}, status=404)
            
            # 특정 루틴에 대한 완료 기록을 포함한 응답
            serializer = RoutineSerializer(routine_obj)
            return Response(serializer.data)
