#from  django.http import HttpResponse
from django.shortcuts import render

def homepage (request):
    return render(request,'home.html')
     #return HttpResponse("helloworld")
    


def about (request):
    return render(request,'about.html')
    #return HttpResponse("hello dine")
    

def account (request):
    return render(request,'account.html')
     #return HttpResponse("googogaga")
    
