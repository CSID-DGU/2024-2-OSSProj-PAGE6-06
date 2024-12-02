from django.db import models
from django.conf import settings
from routinelist.models import *


class Club(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    time = models.IntegerField()
    content = models.TextField(max_length=200)
    createdAt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='club_images/')

    @property
    def participantCount(self):
        return UserJoinedRoutine.objects.filter(club_routine__club=self).count()  # 참여한 사용자 수 계산

    def __str__(self):
        return self.title

class UserJoinedRoutine(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="joined_routines")
    club = models.ForeignKey(Club, on_delete=models.CASCADE, related_name="participants")
    personalRoutine = models.ForeignKey('routinelist.Routine', on_delete=models.CASCADE, null=True, blank=True)  # 연결된 개인 루틴
    joinedAt = models.DateTimeField(auto_now_add=True)