from django.urls import path
from .views import *
from . import views

app_name="user"
urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('delete/', DeleteAccountView.as_view(), name='delete_account'),
]