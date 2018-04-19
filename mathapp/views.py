from django.shortcuts import render

def goHome(request):
	return render(request, 'mathapp/home.html', {});

def computer_science(request):
	return render(request, 'mathapp/subjects/computer_science/index.html', {});