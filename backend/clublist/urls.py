from django.urls import path
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name="clublist"

urlpatterns = [
    path('', ClubRoutineListAPIView.as_view(), name='club_routine_list'),  
    path('<int:club_id>/', ClubDetailAPIView.as_view(), name='club_routine_detail'), 
    path('create/', ClubCreateAPIView.as_view(), name='club_routine_create'),
    path('join/<int:club_id>/', JoinClubAPIView.as_view(), name='join_club'),
    path('search/', ClubSearchAPIView.as_view(), name='club-search'),
    path('popular/', PopularClubRoutineListAPIView.as_view(), name='popular-club'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
