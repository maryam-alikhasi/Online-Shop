from django.urls import path
from . import views

urlpatterns = [
    path('signup/step1/', views.user_signup_step1, name='user_signup_step1'),
    path('signup/step2/', views.user_signup_step2, name='user_signup_step2'),
    path('home/<int:user_id>/', views.home_page_view, name='home_page'),
    path('profile/<int:user_id>/', views.user_profile_view, name='user_profile'),
    path('account_info/<int:user_id>/', views.accountinfo_view, name='Account_info'),
    path('orders_history/<int:user_id>/', views.orders_history_view, name='orders_history'),
    path('other_product/<int:user_id>/', views.otherproduct_view, name='other_product'),
    path('cart/<int:user_id>/', views.cart_view, name='cart'),
    path('selected_product/<int:user_id>/', views.selected_product_view, name='selected_product'),
]