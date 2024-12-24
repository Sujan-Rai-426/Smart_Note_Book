
from django.shortcuts import render
from django.urls import include, path

from api import views



urlpatterns = [
    path("notes/", views.NoteCreateView.as_view(), name="notes"),
    path("notes/delete/<int:pk>/", views.NoteDeleteView.as_view(), name="note-delete"),
    ]