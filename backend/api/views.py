from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, GatheringSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Gathering
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer


class GatheringListCreate(generics.ListCreateAPIView):
    serializer_class = GatheringSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Gathering.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class GatheringId(generics.RetrieveAPIView):
     serializer_class = GatheringSerializer
     permission_classes = [IsAuthenticated]

     def get_queryset(self):
        user = self.request.user
        return Gathering.objects.filter(author=user).filter(pk=self.kwargs['pk'])


class GatheringDelete(generics.DestroyAPIView):
    serializer_class = GatheringSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Gathering.objects.filter(author=user)
    
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


