from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.goHome, name='home'),
    url(r'^subjects/computer_science/cs_index.html', views.computer_science, name='cs_index'),
    url(r'^subjects/computer_science/math_index.html', views.math, name='math_index'),
    url(r'^apps/games/games_index.html', views.games, name='games_index'),
    url(r'^apps/tools/tools_index.html', views.tools, name='tools_index'),
]