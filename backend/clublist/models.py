from django.db import models
from django.conf import settings
from routinelist.models import *


# class ClubRoutine(models.Model):
#     id = models.AutoField(primary_key=True)
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="created_club_routines")  # 클럽 루틴 생성자
#     title = models.CharField(max_length=50)
#     time = models.DurationField()
#     content = models.TextField(max_length=200)
#     image = models.ImageField(upload_to='club_images/')  # 클럽 루틴 전용 이미지 필드 (필수)

#     def __str__(self):
#         return self.title

# class UserJoinedRoutine(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="joined_routines")
#     club_routine = models.ForeignKey(ClubRoutine, on_delete=models.CASCADE, related_name="participants")
#     personal_routine = models.ForeignKey(Routine, on_delete=models.CASCADE, null=True, blank=True)  # 연결된 개인 루틴
#     joined_at = models.DateTimeField(auto_now_add=True)