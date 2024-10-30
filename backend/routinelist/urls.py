from django.urls import path
from .views import *
from . import views

app_name="routinelist"
urlpatterns=[
    path('create/',views.routine_list_create),
]