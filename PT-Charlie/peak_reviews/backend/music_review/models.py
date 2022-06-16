from __future__ import unicode_literals

from django.db import models

from django.contrib.auth.models import User

class AlbumReview(models.Model):
	title = models.CharField(max_length=255, default='No Title')
	content = models.CharField(max_length=255, default='No Content')
	author = models.CharField(max_length=100, default='No Author')

def __str__(self):
    return self.review

