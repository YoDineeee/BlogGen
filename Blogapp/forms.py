from django import forms

class DonationForm(forms.Form):
    name = forms.CharField(label='Your Name', max_length=100)
    amount = forms.DecimalField(label='Donation Amount', max_digits=10, decimal_places=2)
    feedback = forms.CharField(label='Feedback', widget=forms.Textarea)
