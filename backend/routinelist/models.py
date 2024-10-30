from django.db import models
from django.conf import settings
# Create your models here.
class Routine(models.Model):
    id=models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    time = models.DurationField() #특정 시간을 나타내는 필드
    content = models.TextField(max_length=200)