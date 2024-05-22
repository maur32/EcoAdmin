from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Gathering


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class GatheringSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    class Meta:
        model = Gathering
        fields = ["id", "title", "material_name","material_type","material_description","material_state","location_street","location_city","location_state","location_country","location_number","date" ,"created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
