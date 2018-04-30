from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
	url(r'', include('mathapp.urls')),
	
	# Django Admin
    url(r'^admin/', admin.site.urls),
	
	# User management
	url(r'^users/', include('users.urls')),
	url(r'^accounts/', include('allauth.urls')),
]