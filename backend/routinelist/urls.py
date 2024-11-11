from django.urls import path
from .views import *
from . import views

app_name="routinelist"
urlpatterns=[
    path('create/',views.routine_list_create),
    path('create/<int:routine_id>/', views.routine_delete, name="routine_delete"),
    path('complete/', views.routine_complete),
]