from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.goHome, name='home'),
    url(r'^subjects/computer_science/index.html', views.computer_science, name='index'),
]