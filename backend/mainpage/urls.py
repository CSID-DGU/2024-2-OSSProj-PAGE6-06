from django.urls import path
from .views import main_page_data  # main_page_data로 변경

urlpatterns = [
    path('', main_page_data, name='main_page'),
]
