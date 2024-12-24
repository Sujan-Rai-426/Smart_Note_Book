from django.shortcuts import render

# Manually imported modules
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import NoteSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note


# Create your views here.


# api creation user view 
class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    
    
# views for creating the notes
class NoteCreateView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = (IsAuthenticated,)
    
    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            print(serializer.errors)


# class view for  deleting the notes
class NoteDeleteView(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = (IsAuthenticated,)
    
    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)
    
    def perform_destroy(self, instance):
        instance.delete()
