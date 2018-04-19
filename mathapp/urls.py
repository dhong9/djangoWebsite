from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.goHome, name='home'),
    url(r'^subjects/computer_science/cs_index.html', views.computer_science, name='cs_index'),
    url(r'^subjects/computer_science/math_index.html', views.math, name='math_index'),
]