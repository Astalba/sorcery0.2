from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, status
from .models import *
from .serializers import *
from rest_framework.response import Response



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

    """def create(self, request):
        serializer = self.serializzatore_classe(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
"""
"""    def retrieve(self, request, pk=None):
        try:
            carta = self.queryset.get(pk=pk)
        except Carta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializzatore_classe(carta)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try:
            carta = self.queryset.get(pk=pk)
        except Carta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializzatore_classe(carta, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        try:
            carta = self.queryset.get(pk=pk)
        except Carta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        carta.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)"""