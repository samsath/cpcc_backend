# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-03-21 21:00
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
            name='Article',
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
                ('post_date', models.DateField(blank=True, null=True, verbose_name='Post Date')),
                ('sort_value', models.IntegerField(default=0, verbose_name='Sort Value')),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Articles',
                'verbose_name': 'Article',
                'ordering': ['-sort_value'],
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Title')),
                ('is_public', models.BooleanField(default=False, verbose_name='Is Public')),
                ('is_featured', models.BooleanField(default=False, verbose_name='Is Featured')),
                ('slug', django_extensions.db.fields.AutoSlugField(blank=True, editable=False, overwrite=True, populate_from=('title',), unique=True)),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
                ('sort_value', models.IntegerField(default=0, verbose_name='Sort Value')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.ManyToManyField(blank=True, null=True, to='article.Category'),
        ),
    ]
