# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-10 23:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager
import django_extensions.db.fields
import mediastore.fields.related


class Migration(migrations.Migration):

    dependencies = [
        ('mediastore', '0002_auto_20170410_2253'),
        ('homepage', '0002_homepage_main_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='PageImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('is_public', models.BooleanField(default=False, verbose_name='Public')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
                ('main_image', mediastore.fields.related.MediaField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pageimage_main_image', to='mediastore.Media')),
            ],
            options={
                'verbose_name': 'Page Image',
                'verbose_name_plural': 'Page Images',
            },
            managers=[
                ('object', django.db.models.manager.Manager()),
            ],
        ),
    ]
