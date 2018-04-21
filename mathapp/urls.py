from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.goHome, name='home'),
    url(r'^subjects/computer_science/cs_index.html', views.computer_science, name='cs_index'),
    url(r'^subjects/computer_science/math_index.html', views.math, name='math_index'),
    url(r'^apps/games/games_index.html', views.games, name='games_index'),
    url(r'^apps/tools/tools_index.html', views.tools, name='tools_index'),
    url(r'^subjects/math/algebrai/algebrai_index.html', views.algebrai, name='algebrai_index'),
    url(r'^subjects/math/algebraii/algebraii_index.html', views.algebraii, name='algebraii_index'),
    url(r'^subjects/math/calculusi/calculusi_index.html', views.calculusi, name='calculusi_index'),
    url(r'^subjects/math/calculusii/calculusii_index.html', views.calculusii, name='calculusii_index'),
    url(r'^subjects/math/geometry/geometry_index.html', views.geometry, name='geometry_index'),
    url(r'^subjects/math/algebrai/precalculus_index.html', views.precalculus, name='precalculus_index'),
]