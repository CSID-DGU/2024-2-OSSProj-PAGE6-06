from django.db import models
from django.conf import settings
from clublist.models import Club
# Create your models here.
class Routine(models.Model):
    id=models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    time = models.IntegerField()
    content = models.TextField(max_length=200)
    is_club = models.BooleanField(default=False)
    club = models.ForeignKey(Club, on_delete=models.CASCADE, null=True, blank=True)

class RoutineComplete(models.Model):
    id = models.AutoField(primary_key=True)
    routine = models.ForeignKey(Routine, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    memo = models.TextField()
    date = models.DateTimeField(auto_now_add=True)