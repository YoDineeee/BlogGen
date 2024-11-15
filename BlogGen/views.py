
    
from django.shortcuts import render, redirect
from django.http import HttpResponse


def home (request):
    return render(request,'home.html')
    

def Online(request):
    return render(request,'online.html')



def Meetme(request):
    return render(request,'Meetme.html')


def Accounts(request):
    return render(request,'Accounts.html')


def top_doners(request):
    return render(request,'top_doners.html')


