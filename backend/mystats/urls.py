from django.urls import path
from .views import RoutinesByDateAPIView, RoutineDetailView

urlpatterns = [
    path('routines/date/', RoutinesByDateAPIView.as_view(), name='routines-by-date'),
    path('routines/routineid/', RoutineDetailView.as_view(), name='routine-detail'),
]
    