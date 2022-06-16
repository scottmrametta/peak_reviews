from rest_framework import serializers
from .models import *

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumReview
        fields = ["title", "content", "author"]



