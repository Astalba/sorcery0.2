from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Carta(models.Model):

    opzioni_elemento = (
        ('Fuoco' , 'Fuoco'),
        ('Terra' , 'Terra'),
        ('Acqua' , 'Acqua'),
        ('Aria' , 'Aria'),
    )

    opzione_tipo = (
        ('avatar' , 'avatar'),
        ('minion' , 'minion'),
        ('magia' , 'magia'),
        ('sito' , 'sito'),
    )

    nome = models.CharField(max_length=100, unique=True, blank=True)
    tipo = models.CharField(max_length=100, blank=True, choices=opzione_tipo, default='')
    costo = models.IntegerField(blank=True)
    elemento = models.CharField(max_length=100, blank=False, choices=opzioni_elemento, default='')
    effetto = models.TextField(max_length=500)
    puntiVita = models.IntegerField(blank=True, null=True)

    def __str__ (self):
        return self.nome