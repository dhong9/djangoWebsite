from django.shortcuts import render

def goHome(request):
	return render(request, 'mathapp/home.html', {});