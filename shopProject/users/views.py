from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login
from .forms import UserPersonalInfoForm, UserContactInfoForm , AccountForm
from .models import User , UserProfile , FavoriteProduct

def user_signup_step1(request):
    if request.method == 'POST':
        form = UserPersonalInfoForm(request.POST)
        if form.is_valid():
            request.session['signup_data'] = form.cleaned_data
            return redirect('user_signup_step2')
    else:
        form = UserPersonalInfoForm()
    return render(request, 'users/signup_step1.html', {'form': form})

def user_signup_step2(request):
    signup_data = request.session.get('signup_data')
    if not signup_data:
        return redirect('user_signup_step1')

    if request.method == 'POST':
        form = UserContactInfoForm(request.POST)
        if form.is_valid():
            user = User(**signup_data)
            contact_data = form.cleaned_data
            for key, value in contact_data.items():
                setattr(user, key, value)
            user.set_password(signup_data['password'])
            user.username = f"user_{user.national_code}"
            user.save()
            del request.session['signup_data']
            login(request, user)
            messages.success(request, 'ثبت‌نام با موفقیت انجام شد.')
            return redirect('home_page', user_id=user.id)
    else:
        form = UserContactInfoForm()
    return render(request, 'users/signup_step2.html', {'form': form})

def home_page_view(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'users/home_page.html', {'user': user})

def user_profile_view(request, user_id):
    user = User.objects.get(id=user_id)
    profile = UserProfile.objects.get(user=user)
    favorites = FavoriteProduct.objects.filter(user=user)

    context = {
        'profile': profile,
        'favorites': favorites
    }
    return render(request, 'users/user_profile.html', context)

def accountinfo_view(request , user_id):
    person = User.objects.get(id=user_id)
    if request.method == 'POST':
        form = AccountForm(request.POST, instance=person)
        if form.is_valid():
            form.save()
            return redirect('user_profile', user_id=person.id)
    else:
        profile = UserProfile.objects.get(user=person)
        form = AccountForm(instance=person)
        context = {
            'profile': profile,
            'form': form
        }
    return render(request, 'users/account_info.html', context)

def orders_history_view(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'users/orders_history1.html', {'user' : user})

def otherproduct_view(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'users/other_product.html', {'user' : user})

def cart_view(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'users/cart.html', {'user' : user})

def selected_product_view(request, user_id):
    user = User.objects.get(id=user_id)
    return render(request, 'users/selected product.html', {'user' : user})