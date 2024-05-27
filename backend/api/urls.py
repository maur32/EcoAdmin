from django.urls import path
from . import views

urlpatterns = [
    path("gathering/", views.GatheringListCreate.as_view(), name="gathering-list"),
    path("gathering/<int:pk>/",views.GatheringId.as_view(), name="gathering-id"),
    path("gathering/delete/<int:pk>/", views.GatheringDelete.as_view(), name="delete-gathering"),
]
