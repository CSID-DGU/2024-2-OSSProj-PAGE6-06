# mylibrary/models.py

from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    cover_image = models.URLField()

    def __str__(self):
        return self.title
    
class RoutineRecord(models.Model):
    book = models.ForeignKey(Book, related_name='routine_records', on_delete=models.CASCADE)
    completed_date = models.DateField()

    def __str__(self):
        return f"{self.book.title} - {self.completed_date}"