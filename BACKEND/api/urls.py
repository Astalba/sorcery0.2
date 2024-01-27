from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('carte', CartaViewset, basename='carta')
urlpatterns = router.urls

urlpatterns = [
    path("register/", UserRegistrazioneView.as_view(), name="register"),
    path("login/", loginView.as_view(), name="login"),
    path('logout/', logoutview.as_view(), name='logout'),
]