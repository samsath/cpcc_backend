# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-23 22:58
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calendar', '0005_tidedata'),
    ]

    operations = [
        migrations.AddField(
            model_name='tidedata',
            name='converted',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(blank=True, null=True), size=None), default=[], size=None),
        ),
    ]
