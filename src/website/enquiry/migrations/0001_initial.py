# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-03-21 21:06
from __future__ import unicode_literals

from django.db import migrations, models
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Enquiry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('first_name', models.CharField(max_length=255, verbose_name='First Name')),
                ('last_name', models.CharField(max_length=255, verbose_name='Last Name')),
                ('message', models.TextField(verbose_name='Message')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True)),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Enquiries',
                'verbose_name': 'Enquiry',
                'ordering': ['created'],
            },
        ),
    ]
