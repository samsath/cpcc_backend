from django.forms import ModelForm
from .models import Enquiry, NewsletterSignup


class EnquiryForm(ModelForm):
    class Meta:
        model = Enquiry
        fields =['email','first_name','last_name','message',]


class NewsletterSignupForm(ModelForm):
    class Meta:
        model = NewsletterSignup
        fields = ['email','first_name','last_name',]