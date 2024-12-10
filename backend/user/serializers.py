# serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework.authtoken.models import Token

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, validators=[validate_password])
    passwordConfirm = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'password', 'passwordConfirm', 'name', 'nickname', 'profileImage']
    
    def validate(self, data):
        if data['password'] != data['passwordConfirm']:
            raise serializers.ValidationError("Passwords do not match.")
        
        if User.objects.filter(username=data['username']).exists():
            raise serializers.ValidationError("This email is already registered.")
        
        return data
    
    def create(self, validated_data):
        validated_data.pop('passwordConfirm')
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            name=validated_data['name'],
            nickname=validated_data['nickname'],
            profileImage=validated_data['profileImage']
        )
        Token.objects.create(user=user)
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.EmailField() 
    password = serializers.CharField(write_only=True)

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'name', 'nickname', 'profileImage']
        read_only_fields=['username', 'name', 'nickname', 'profileImage']