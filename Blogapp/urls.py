from django.urls import path
from . import donation_view, thank_you

urlpatterns = [
    path('donate/', donation_view, name='donate'),
    path('thank_you/', thank_you, name='thank_you'),
]