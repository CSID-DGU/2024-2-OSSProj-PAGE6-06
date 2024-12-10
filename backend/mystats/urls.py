# mystats/urls.py
from django.urls import path
from .views import RoutinesByMonthAPIView, RoutineRecordView
urlpatterns = [
    path('record/month/', RoutinesByMonthAPIView.as_view(), name='routines-by-month'),  # 월별 루틴 기록 조회
    path('record/all/', RoutineRecordView.as_view(), kwargs={'routine': 'all'}, name='routine-all-record'),
    path('record/<int:routine>/', RoutineRecordView.as_view(), name='routine-record'),
    ]
