from django import forms
from .models import User

class UserPersonalInfoForm(forms.ModelForm):
    education = forms.ChoiceField(
        choices=[
            ('not_chosen', 'انتخاب کنید'),
            ('diploma', 'دیپلم'),
            ('bachelor', 'لیسانس'),
            ('master', 'فوق لیسانس'),
        ],
        widget=forms.Select(attrs={'class': 'input-field custom-select'}),
        required= False
    )

    job = forms.ChoiceField(
        choices=[
            ('not_chosen', 'انتخاب کنید'),
            ('student', 'دانشجو'),
            ('engineering', 'مهندس'),
            ('teacher', 'معلم'),
        ],
        widget=forms.Select(attrs={'class': 'input-field custom-select'}),
        required=False
    )
    class Meta:
        model = User
        fields = [
            'full_name',
            'national_code',
            'education',
            'job',
            'email',
            'password',
            'birth_date',
        ]
        widgets = {
            'full_name' : forms.TextInput(attrs={'class': 'input-field'}),
            'national_code' : forms.TextInput(attrs={'class': 'input-field  left-place'}),
            'education' : forms.Select(attrs={'class': 'input-field custom-select'}),
            'job' : forms.Select(attrs={'class': 'input-field custom-select'}),
            'email' : forms.TextInput(attrs={'class': 'input-field left-place'}),
            'password' : forms.PasswordInput(attrs={'class': 'input-field left-place'}),
            'birth_date': forms.TextInput(attrs={'class': 'input-field left-place' , 'placeholder': '۱۳۷۰/۰۱/۰۱'}),
        }


class UserContactInfoForm(forms.ModelForm):
    province = forms.ChoiceField(
        choices=[
            ('tehran', 'تهران'),
            ('isfahan', 'اصفهان'),
            ('kerman', 'کرمان'),
        ],
        widget=forms.Select(attrs={'class': 'input-field custom-select'}),
        required=True,
    )

    city = forms.ChoiceField(
        choices=[
            ('tehran', 'تهران'),
            ('isfahan', 'اصفهان'),
            ('kerman', 'کرمان'),
        ],
        widget=forms.Select(attrs={'class': 'input-field custom-select'}),
        required=True,
    )
    class Meta:
        model = User
        fields = [
            'mobile_number',
            'phone_number',
            'province',
            'city',
            'postal_code',
            'full_address',
        ]
        widgets = {
            'mobile_number' : forms.TextInput(attrs={'class': 'input-field  left-place'}),
            'phone_number' : forms.TextInput(attrs={'class': 'input-field  left-place'}),
            'postal_code' : forms.TextInput(attrs={'class': 'input-field left-place'}),
            'full_address' : forms.TextInput(attrs={'class': 'input-field-last'}),
        }

class AccountForm(forms.ModelForm):
    education = forms.ChoiceField(
        choices=[
            ('not_chosen', 'انتخاب کنید'),
            ('diploma', 'دیپلم'),
            ('bachelor', 'لیسانس'),
            ('master', 'فوق لیسانس'),
        ],
        widget=forms.Select(attrs={'class': 'input-field custom-select'}),
        required= False
    )

    job = forms.ChoiceField(
        choices=[
            ('not_chosen', 'انتخاب کنید'),
            ('student', 'دانشجو'),
            ('engineering', 'مهندس'),
            ('teacher', 'معلم'),
        ],
        widget=forms.Select(attrs={'class': 'input-field custom-select'}),
        required=False
    )
    class Meta:
        model = User
        fields = [
            'full_name',
            'national_code',
            'education',
            'job',
            'birth_date',
            'email',
            'password',
            'password_again',
        ]
        widgets = {
            'full_name' : forms.TextInput(attrs={'class': 'input-field'}),
            'national_code' : forms.TextInput(attrs={'class': 'input-field  left-place'}),
            'education' : forms.Select(attrs={'class': 'input-field custom-select'}),
            'job' : forms.Select(attrs={'class': 'input-field custom-select'}),
            'birth_date': forms.DateInput(attrs={'class': 'input-field left-place'}),
            'email' : forms.EmailInput(attrs={'class': 'input-field left-place'}),
            'password' : forms.PasswordInput(attrs={'class': 'input-field'}),
            'password_again' : forms.PasswordInput(attrs={'class': 'input-field'}),
        }

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password_again = cleaned_data.get('password_again')

        if password and password_again and password != password_again:
            self.add_error('password_again', 'رمز عبور و تکرار آن یکسان نیستند.')

        return cleaned_data