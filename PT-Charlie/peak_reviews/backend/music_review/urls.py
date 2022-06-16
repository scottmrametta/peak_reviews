from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AddReviewViewSet, DeleteReviewView, DetailViewSet
from .models import AlbumReview

router = DefaultRouter()

urlpatterns = [
    path("", include(router.urls)),
    path('add-review/<str:author>', AddReviewViewSet.as_view(), name="add-review"),
    path('delete-review/<int:review_id>', DeleteReviewView.as_view(), name="delete-review"),
    path('detail/<int:review_id>', DetailViewSet.as_view(), name="detail"),
]
