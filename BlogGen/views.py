
    
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import DonationForm
import csv


def homepage (request):
    return render(request,'home.html')
     #return HttpResponse("helloworld")


def donation_view(request):
    if request.method == 'POST':
        form = DonationForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            amount = form.cleaned_data['amount']
            feedback = form.cleaned_data['feedback']

            # Save data to a CSV file
            with open('donations.csv', mode='a', newline='') as file:
                writer = csv.writer(file)
                writer.writerow([name, amount, feedback])
            
            return redirect('thank_you')
    else:
        form = DonationForm()
    
    return render(request, 'donations/donate.html', {'form': form})

def thank_you(request):
    return HttpResponse("Thank you for your donation!")

