# Generated by Django 4.2.7 on 2023-11-23 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carta',
            name='dominio',
        ),
        migrations.AddField(
            model_name='carta',
            name='elemento',
            field=models.CharField(choices=[('elemento1', 'Fuoco'), ('elemento2', 'Terra'), ('elemento3', 'Acqua'), ('elemento4', 'Aria')], default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='carta',
            name='tipo',
            field=models.CharField(choices=[('tipo1', 'avatar'), ('tipo2', 'minion'), ('tipo3', 'magia'), ('tipo4', 'sito')], default='', max_length=100),
        ),
    ]
