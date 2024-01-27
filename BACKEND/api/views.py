from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, status, generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate, logout


# Create your views here.
def home(request):
    return HttpResponse('la mia home')



class CartaViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Carta.objects.all()
    serializzatore_classe = CartaSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializzatore_classe(queryset, many=True)
        return Response(serializer.data)

class UserRegistrazioneView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def create(self, request):
        serializer = self.get_serializer(data = request.data)
        try:
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
class loginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            return Response(
                status= status.HTTP_200_OK
            )
        else: return Response(
            status = status.HTTP_400_BAD_REQUEST
        )
        
class logoutview(APIView):
    def post(self,request):
        logout(request)
        return Response(status=status.HTTP_205_REST_CONTENT)
