# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-03-21 21:05
from __future__ import unicode_literals

from django.db import migrations, models
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('is_public', models.BooleanField(default=False, verbose_name='Is Public')),
                ('is_featured', models.BooleanField(default=False, verbose_name='Is Featured')),
                ('slug', django_extensions.db.fields.AutoSlugField(blank=True, editable=False, overwrite=True, populate_from=('title',), unique=True)),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
                ('cost', models.TextField(blank=True, null=True, verbose_name='Cost')),
                ('day_of_week', models.CharField(choices=[(0, 'Monday'), (1, 'Tuesday'), (2, 'Wednesday'), (3, 'Thursday'), (4, 'Friday'), (5, 'Saturday'), (6, 'Sunday')], max_length=10, verbose_name='Day of Week')),
                ('sort_value', models.IntegerField(default=0, verbose_name='Sort Value')),
            ],
            options={
                'ordering': ['sort_value'],
                'verbose_name_plural': 'Sessions',
                'verbose_name': 'Session',
            },
        ),
    ]
