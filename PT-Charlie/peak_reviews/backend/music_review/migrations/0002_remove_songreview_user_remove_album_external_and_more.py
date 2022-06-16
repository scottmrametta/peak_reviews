# Generated by Django 4.0.5 on 2022-06-09 22:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('music_review', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='songreview',
            name='user',
        ),
        migrations.RemoveField(
            model_name='album',
            name='external',
        ),
        migrations.RemoveField(
            model_name='album',
            name='popularity',
        ),
        migrations.RemoveField(
            model_name='album',
            name='query',
        ),
        migrations.RemoveField(
            model_name='album',
            name='theType',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='albumId',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='external',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='numOfFollowers',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='popularity',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='query',
        ),
        migrations.RemoveField(
            model_name='artist',
            name='songId',
        ),
        migrations.RemoveField(
            model_name='song',
            name='external',
        ),
        migrations.RemoveField(
            model_name='song',
            name='popularity',
        ),
        migrations.RemoveField(
            model_name='song',
            name='preview',
        ),
        migrations.RemoveField(
            model_name='song',
            name='query',
        ),
        migrations.RemoveField(
            model_name='song',
            name='theType',
        ),
        migrations.DeleteModel(
            name='ArtistReview',
        ),
        migrations.DeleteModel(
            name='SongReview',
        ),
    ]
