# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-10 22:00
from __future__ import unicode_literals

import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('taggit', '0002_auto_20150616_2121'),
    ]

    operations = [
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=120, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('slug', models.SlugField(blank=True, help_text='Leave this field blank for autopopulating a unique tag based on the objects name.', unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'media',
                'verbose_name_plural': 'media',
                'ordering': ('created',),
            },
        ),
        migrations.CreateModel(
            name='QueueItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uploaded', models.DateTimeField(auto_now_add=True)),
                ('error', models.BooleanField(default=False)),
                ('error_message', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='Download',
            fields=[
                ('media_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mediastore.Media')),
                ('file', models.FileField(upload_to='media/downloads', verbose_name='download file')),
                ('file_extension', models.CharField(blank=True, editable=False, max_length=12, null=True, verbose_name='file extenstion')),
                ('file_size', models.PositiveIntegerField(editable=False, verbose_name='file size')),
                ('count', models.PositiveIntegerField(default=0, verbose_name='download counter')),
            ],
            options={
                'verbose_name': 'download',
                'verbose_name_plural': 'downloads',
            },
            bases=('mediastore.media',),
        ),
        migrations.CreateModel(
            name='Embeded',
            fields=[
                ('media_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mediastore.Media')),
                ('content', models.TextField()),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='media/embeded/thumbnails')),
            ],
            options={
                'verbose_name': 'embeded media',
                'verbose_name_plural': 'embeded media',
            },
            bases=('mediastore.media',),
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('media_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mediastore.Media')),
                ('file', models.ImageField(height_field='height', upload_to='media/images', verbose_name='image', width_field='width')),
                ('width', models.IntegerField(editable=False, verbose_name='width')),
                ('height', models.IntegerField(editable=False, verbose_name='height')),
                ('mimetype', models.CharField(blank=True, editable=False, max_length=32, null=True, verbose_name='mimetype')),
            ],
            options={
                'verbose_name': 'image',
                'verbose_name_plural': 'images',
            },
            bases=('mediastore.media',),
        ),
        migrations.CreateModel(
            name='Map',
            fields=[
                ('media_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mediastore.Media')),
                ('centre', django.contrib.gis.db.models.fields.PointField(srid=4326, verbose_name='centre')),
                ('path', django.contrib.gis.db.models.fields.LineStringField(srid=4326, verbose_name='Path')),
                ('start', django.contrib.gis.db.models.fields.PointField(srid=4326, verbose_name='Start')),
                ('end', django.contrib.gis.db.models.fields.PointField(srid=4326, verbose_name='End')),
            ],
            options={
                'verbose_name': 'Map',
                'verbose_name_plural': 'Maps',
            },
            bases=('mediastore.media', models.Model),
        ),
        migrations.CreateModel(
            name='PDF',
            fields=[
                ('media_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mediastore.Media')),
                ('file', models.FileField(upload_to='media/pdf', verbose_name='pdf file')),
                ('file_size', models.PositiveIntegerField(editable=False, verbose_name='file size')),
            ],
            options={
                'verbose_name': 'PDF',
                'verbose_name_plural': 'PDFs',
            },
            bases=('mediastore.media',),
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('media_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='mediastore.Media')),
                ('file', models.FileField(upload_to='media/video', verbose_name='video')),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='media/video/thumbnails', verbose_name='video thumbnail')),
                ('generated_thumbnail', models.ImageField(blank=True, null=True, upload_to='media/video/generated_thumbnails', verbose_name='generated video thumbnail')),
                ('is_ready', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'video',
                'verbose_name_plural': 'videos',
            },
            bases=('mediastore.media',),
        ),
        migrations.AddField(
            model_name='media',
            name='content_type',
            field=models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.ContentType'),
        ),
        migrations.AddField(
            model_name='media',
            name='tags',
            field=taggit.managers.TaggableManager(blank=True, help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
        migrations.AddField(
            model_name='queueitem',
            name='related_video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mediastore.Video'),
        ),
    ]
