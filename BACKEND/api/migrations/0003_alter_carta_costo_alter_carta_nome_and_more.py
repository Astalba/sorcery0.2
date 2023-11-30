# Generated by Django 4.2.6 on 2023-11-23 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_carta_dominio_carta_elemento_alter_carta_tipo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carta',
            name='costo',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='carta',
            name='nome',
            field=models.CharField(blank=True, max_length=100, unique=True),
        ),
        migrations.AlterField(
            model_name='carta',
            name='puntiVita',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='carta',
            name='tipo',
            field=models.CharField(blank=True, choices=[('tipo1', 'avatar'), ('tipo2', 'minion'), ('tipo3', 'magia'), ('tipo4', 'sito')], default='', max_length=100),
        ),
    ]