# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-23 23:35
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calendar', '0008_auto_20170523_2333'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tidedata',
            name='converted',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(blank=True, null=True), size=None), default=[], size=None),
        ),
    ]
