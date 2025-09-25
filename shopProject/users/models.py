from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

def to_persian_digits(value):
    persian_digits = '۰۱۲۳۴۵۶۷۸۹'
    english_digits = '0123456789'
    return ''.join(persian_digits[english_digits.index(ch)] if ch in english_digits else ch for ch in str(value))


class User(AbstractUser):
    full_name = models.CharField(max_length=100)
    national_code = models.CharField(max_length=10, unique=True)

    EDUCATION_CHOICES = [
        ('not_chosen', 'انتخاب کنید'),
        ('diploma', 'دیپلم'),
        ('bachelor', 'لیسانس'),
        ('master', 'فوق لیسانس'),
    ]
    education = models.CharField(max_length=20, choices=EDUCATION_CHOICES , default='master')

    JOB_CHOICES = [
        ('not_chosen', 'انتخاب کنید'),
        ('student', 'دانشجو'),
        ('engineering', 'مهندس'),
        ('teacher', 'معلم'),
    ]
    job = models.CharField(max_length=20, choices=JOB_CHOICES)

    birth_date = models.CharField(max_length=10)
    mobile_number = models.CharField(max_length=11)
    phone_number = models.CharField(max_length=11)

    PROVINCE_CHOICES = [
        ('tehran', 'تهران'),
        ('isfahan', 'اصفهان'),
        ('kerman', 'کرمان'),
    ]
    province = models.CharField(max_length=20, choices=PROVINCE_CHOICES)

    CITY_CHOICES = [
        ('tehran', 'تهران'),
        ('isfahan', 'اصفهان'),
        ('kerman', 'کرمان'),
    ]
    city = models.CharField(max_length=20, choices=CITY_CHOICES)

    postal_code = models.CharField(max_length=10)
    full_address = models.TextField()

    password_again = models.CharField(max_length=100)

    def __str__(self):
        return self.full_name

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    credit = models.DecimalField(max_digits=10, decimal_places=3, default=0)
    design_count = models.PositiveIntegerField(default=0)
    order_count = models.PositiveIntegerField(default=0)

    current_orders = models.PositiveIntegerField(default=0)
    comments = models.PositiveIntegerField(default=0)
    sent_orders = models.PositiveIntegerField(default=0)
    canceled_orders = models.PositiveIntegerField(default=0)

    gallery_products = models.PositiveIntegerField(default=0)
    physical_products = models.PositiveIntegerField(default=0)

    profile_image = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    @property
    def credit_farsi(self):
        return to_persian_digits(self.credit)

    @property
    def design_farsi(self):
        return to_persian_digits(self.design_count)

    @property
    def order_farsi(self):
        return to_persian_digits(self.order_count)

    @property
    def current_orders_farsi(self):
        return to_persian_digits(self.current_orders)

    @property
    def physical_products_farsi(self):
        return to_persian_digits(self.physical_products)

    @property
    def gallery_products_farsi(self):
        return to_persian_digits(self.gallery_products)

    @property
    def canceled_orders_farsi(self):
        return to_persian_digits(self.canceled_orders)

    @property
    def sent_orders_farsi(self):
        return to_persian_digits(self.sent_orders)

    @property
    def comment_farsi(self):
        return to_persian_digits(self.comments)


    def __str__(self):
        return f"profile: {self.user.full_name}"

class FavoriteProduct(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorite_products')
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=3)
    image = models.ImageField(upload_to='favorite_products/')

    @property
    def price_farsi(self):
        return to_persian_digits(self.price)

    def __str__(self):
        return f"{self.title} - {self.user.full_name}"
