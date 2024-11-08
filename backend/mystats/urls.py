# mystats/urls.py
from django.urls import path
from .views import RoutinesByDateAPIView, RoutineRecordView

urlpatterns = [
    path('record/date/', RoutinesByDateAPIView.as_view(), name='routines-by-date'),  # 쿼리 파라미터를 사용하여 날짜 전달
    path('record/<str:routine>/', RoutineRecordView.as_view(), name='routine-record'),
]
