from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from.models import Routine
from .serializers import *
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def routine_list_create(request):

    if request.method=='GET':
        routines=Routine.objects.filter(user=request.user)  # 현재 사용자에 해당하는 루틴 필터링
        serializer = RoutineSerializer(routines, many=True)
        return Response(data=serializer.data)
    
    if request.method=='POST':
        serializer = RoutineSerializer(data=request.data, context={'request': request})
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(data=serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def routine_complete(request):

    if request.method=='POST':
        serializer = RoutineCompleteSerializer(data=request.data, context={'request':request})
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(data=serializer.data)