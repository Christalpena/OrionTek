from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = PhoneNumberField(null=False, blank=False, unique=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"


class Addresses(models.Model):
    address = models.CharField(max_length=200)
    apartment = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return self.address

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"