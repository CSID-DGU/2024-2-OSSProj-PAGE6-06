from django.utils.dateparse import parse_date  # parse_date를 사용하도록 변경
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from routinelist.models import RoutineComplete
from mystats.serializers import RoutineCompleteSerializer

class RoutinesByDateAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        date_str = request.query_params.get('date')  # 쿼리 파라미터에서 날짜를 가져옴
        date = parse_date(date_str)  # parse_date로 변경하여 YYYY-MM-DD 형식 지원
        if not date:
            return Response({"error": "Invalid date format. Please use YYYY-MM-DD format."}, status=400)

        # RoutineComplete 모델 기반으로 조회
        routines = RoutineComplete.objects.filter(date__date=date, user=request.user)
        serializer = RoutineCompleteSerializer(routines, many=True)
        return Response(serializer.data)

class RoutineDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        routine_id = request.query_params.get('routineid')  # 쿼리 파라미터로 받아옴
        if not routine_id:
            return Response({'error': 'routineid parameter is required'}, status=400)

        # routine_id를 기준으로 RoutineComplete 객체 필터링
        routine_completes = RoutineComplete.objects.filter(routine_id=routine_id)
        if not routine_completes:
            return Response({'message': 'No routine completions found for this ID.'}, status=404)

        serializer = RoutineCompleteSerializer(routine_completes, many=True)
        return Response(serializer.data)