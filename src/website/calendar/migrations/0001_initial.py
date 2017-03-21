# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-03-21 21:05
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Calendar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(verbose_name='Date')),
                ('sun_rise', models.TimeField(blank=True, null=True, verbose_name='Sun rise')),
                ('sun_set', models.TimeField(blank=True, null=True, verbose_name='Sun set')),
                ('temperature', models.FloatField(blank=True, null=True, verbose_name='Temperature')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Calendar',
                'verbose_name': 'Calendar',
                'ordering': ['date'],
            },
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('is_public', models.BooleanField(default=False, verbose_name='Is Public')),
                ('is_featured', models.BooleanField(default=False, verbose_name='Is Featured')),
                ('slug', django_extensions.db.fields.AutoSlugField(blank=True, editable=False, overwrite=True, populate_from=('title',), unique=True)),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
                ('event_type', models.CharField(choices=[('closed', 'Closed'), ('notice', 'Notice'), ('event', 'Event'), ('trip', 'Trip')], max_length=255, verbose_name='Event Type')),
                ('start_time', models.TimeField(blank=True, null=True, verbose_name='Start Time')),
                ('end_time', models.TimeField(blank=True, null=True, verbose_name='End Time')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('date', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='calendar.Calendar')),
            ],
            options={
                'verbose_name_plural': 'Event',
                'verbose_name': 'Event',
                'ordering': ['date'],
            },
        ),
        migrations.CreateModel(
            name='ExtraFields',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('value', models.CharField(max_length=255, verbose_name='Value')),
                ('sort_value', models.IntegerField(blank=True, null=True, verbose_name='Sort Value')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Trips',
                'verbose_name': 'Extra Field',
                'ordering': ['sort_value'],
            },
        ),
        migrations.CreateModel(
            name='Tide',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.TimeField(verbose_name='Time')),
                ('level', models.FloatField(verbose_name='Level')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
                ('day', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='calendar.Calendar')),
            ],
        ),
        migrations.CreateModel(
            name='Trips',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('is_public', models.BooleanField(default=False, verbose_name='Is Public')),
                ('is_featured', models.BooleanField(default=False, verbose_name='Is Featured')),
                ('slug', django_extensions.db.fields.AutoSlugField(blank=True, editable=False, overwrite=True, populate_from=('title',), unique=True)),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
                ('list_description', models.CharField(blank=True, max_length=255, null=True, verbose_name='List Description')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Description')),
                ('start_date', models.DateTimeField(blank=True, null=True, verbose_name='Start Date and Time')),
                ('end_date', models.DateTimeField(blank=True, null=True, verbose_name='End Date and Time')),
                ('day', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='calendar.Calendar')),
            ],
            options={
                'verbose_name_plural': 'Trips',
                'verbose_name': 'Trip',
                'ordering': ['day'],
            },
        ),
        migrations.CreateModel(
            name='WeatherTypes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('slug', django_extensions.db.fields.AutoSlugField(blank=True, editable=False, overwrite=True, populate_from=('title',), unique=True)),
                ('class_code', models.CharField(max_length=255, verbose_name='Code')),
            ],
        ),
        migrations.AddField(
            model_name='extrafields',
            name='trips',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='calendar.Trips'),
        ),
        migrations.AddField(
            model_name='calendar',
            name='weather',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='calendar.WeatherTypes'),
        ),
    ]
