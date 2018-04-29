from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
	url(r'^users/', include('users.urls')),
	url(r'^users/', include('django.contrib.auth.urls')),
    url(r'', include('mathapp.urls')),
]