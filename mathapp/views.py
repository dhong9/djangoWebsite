from django.shortcuts import render

def goHome(request):
	return render(request, 'mathapp/home.html', {});

def computer_science(request):
	return render(request, 'mathapp/subjects/computer_science/cs_index.html', {});

def math(request):
	return render(request, 'mathapp/subjects/math/math_index.html', {});

def games(request):
	return render(request, 'mathapp/apps/games/games_index.html', {});

def tools(request):
	return render(request, 'mathapp/apps/tools/tools_index.html', {});