from django.urls import path,include
from .views import ClientView,AddressView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'clients',ClientView)
router.register(r'addresses', AddressView)

urlpatterns = [
    path('api/v1/',include(router.urls))
]