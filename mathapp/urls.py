from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.goHome, name='home'),
]