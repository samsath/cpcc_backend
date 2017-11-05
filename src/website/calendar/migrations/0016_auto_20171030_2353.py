# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-10-30 23:53
from __future__ import unicode_literals

from django.db import migrations
import mediastore.fields.related


class Migration(migrations.Migration):

    dependencies = [
        ('mediastore', '0004_auto_20170525_1932'),
        ('calendar', '0015_windy_water_celsius'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='trips',
            options={'ordering': ['-day', '-start_date', '-end_date', 'title'], 'verbose_name': 'Trip', 'verbose_name_plural': 'Trips'},
        ),
        migrations.AddField(
            model_name='trips',
            name='documents',
            field=mediastore.fields.related.MultipleMediaField(blank=True, help_text=None, null=True, related_name='trips_document', to='mediastore.Media'),
        ),
    ]