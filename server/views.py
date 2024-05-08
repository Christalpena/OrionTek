from rest_framework import viewsets
from .serializer import ClientSerializer,AddressSerializer
from .models import Client,Addresses
# Create your views here.


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

class AddressView(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Addresses.objects.all()