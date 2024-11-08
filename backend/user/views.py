# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from rest_framework.authtoken.models import Token
from .serializers import *
from django.contrib.auth import get_user_model
from .models import UserProfile
from rest_framework.permissions import IsAuthenticated


User = get_user_model()

class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                username=serializer.validated_data['username'], 
                password=serializer.validated_data['password']
            )
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key}, status=status.HTTP_200_OK)
            return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            # request.user.auth_token.delete()
            logout(request)
            return Response({"message": "로그아웃 완료"}, status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "User is not authenticated."}, status=status.HTTP_400_BAD_REQUEST)

class DeleteAccountView(APIView):
    permission_classes = [IsAuthenticated]  # 인증된 사용자만 접근 가능

    def delete(self, request):
        user = request.user 
        user.delete()  
        return Response({"message": "User account has been deleted."}, status=status.HTTP_204_NO_CONTENT)
    
class UserProfileView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)