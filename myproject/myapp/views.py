from django.shortcuts import render
import json
from myapp.models import User

# Create your views here.
with open('users.json') as f: 
    data = json.load(f)

for user_data in data:
    user = User.objects.create(
        name=user_data['name'],
        amount = user_data['amount']
    )