from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, generics, mixins
from rest_framework.decorators import api_view
from rest_framework import authentication, permissions
from .serializers import *
import requests
import spotipy.oauth2 as oauth2
from spotipy.oauth2 import SpotifyClientCredentials
from decouple import config


# Create your views here.
credentials = oauth2.SpotifyClientCredentials(
		client_id='040c68e70e554c82b8019c801e42ba7c',
		client_secret='6638971e9e9444fda9ec67e0a3246c68')

class DetailViewSet(generics.ListAPIView):
    serializer_class = ReviewSerializer
    def get_queryset(self):
        review_id = self.kwargs['review_id']
        queryset = AlbumReview.objects.filter(id=review_id)
        return queryset

class AddReviewViewSet(generics.RetrieveUpdateAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'author'
    lookup_field = 'author'
    queryset = User.objects.all()

class DeleteReviewView(mixins.DestroyModelMixin, generics.RetrieveAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    lookup_field = 'id'
    queryset = AlbumReview.objects.all()

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


@api_view(['GET'])
def artist(request, artist):
    KEY = config('client_id')
    SECRET = config('client_secret')
    url = f"https://api.spotify.com/v1/search"
    response = requests.get(url)
    data = response.json()
    return Response(data)


@api_view(['GET'])
def artist_and_album(request, artist_and_album):
    KEY = config('client_id')
    SECRET = config('client_secret')
    url = f"https://api.spotify.com/v1/artists/{id}/albums"
    response = requests.get(url)
    data = response.json()
    return Response(data)


@api_view(['GET'])
def get_tracklist(request, artist, album):
    KEY = config('client_id')
    SECRET= config('client_secret')
    url = f"https://api.spotify.com/v1/albums/{id}/tracks"
    response = requests.get(url)
    data = response.json()
    return Response(data)



   