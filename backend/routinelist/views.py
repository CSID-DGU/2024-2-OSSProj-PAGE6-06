from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from.models import Routine
from .serializers import *
from django.shortcuts import get_object_or_404
from rest_framework import status


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def routine_list(request):
    if request.method=='GET':
        routines=Routine.objects.filter(user=request.user)
        serializer = RoutineSerializer(routines, many=True)
        return Response(data=serializer.data)




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def routine_list_create(request):
    
    if request.method=='POST':
        serializer = RoutineSerializer(data=request.data, context={'request': request})
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(data=serializer.data)
        
        

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def routine_delete(request, routine_id):
    try:
        routine = Routine.objects.get(id=routine_id, user=request.user)
    except Routine.DoesNotExist:
        return Response({"error": "루틴을 찾을 수 없음"}, status=status.HTTP_404_NOT_FOUND)
    
    routine.delete()
    return Response({"message": "루틴 삭제 완료"}, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def routine_complete(request):

    if request.method=='POST':
        serializer = RoutineCompleteSerializer(data=request.data, context={'request':request})
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(data=serializer.data)