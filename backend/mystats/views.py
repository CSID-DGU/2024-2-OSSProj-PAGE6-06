# mystats/views.py 
from django.utils.dateparse import parse_date
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from routinelist.models import Routine, RoutineComplete
from mystats.serializers import RoutineCompleteSerializer, RoutineSerializer

class RoutinesByMonthAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        year = request.query_params.get('year')
        month = request.query_params.get('month')

        if not year or not month:
            return Response({"error": "Both year and month parameters are required."}, status=400)

        try:
            year = int(year)
            month = int(month)
        except ValueError:
            return Response({"error": "Year and month must be integers."}, status=400)

        # 월별로 해당하는 모든 RoutineComplete 조회
        routines = RoutineComplete.objects.filter(date__year=year, date__month=month, user=request.user)
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
        
            # 숫자 ID로 처리
        try:
            routine_id = int(routine)  # 숫자로 변환을 시도
            routine_obj = Routine.objects.get(id=routine_id, user=request.user)
            serializer = RoutineSerializer(routine_obj)
            return Response(serializer.data)
        except (ValueError, Routine.DoesNotExist):
            return Response({"error": "Routine not found"}, status=404)
