from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('carte', CartaViewset, basename='carta')
urlpatterns = router.urls

"""urlpatterns = [
    path('', home)
]"""