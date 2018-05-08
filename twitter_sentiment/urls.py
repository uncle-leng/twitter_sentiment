"""twitter_sentiment URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from twitter_backend import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('test/', views.test),
    path('cities/', views.cities),
    path('map_aurin/', views.map_aurin),
    path('cities/map_jpg', views.map_jpg),
    path('twitter_user/', views.twitter_user),
    path('twitter_user/words/', views.words)
]
