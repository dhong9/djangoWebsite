from django.shortcuts import render

def goHome(request):
	return render(request, 'mathapp/home.html', {})

def computer_science(request):
	return render(request, 'mathapp/subjects/computer_science/cs_index.html', {})

def math(request):
	return render(request, 'mathapp/subjects/math/math_index.html', {})

def games(request):
	return render(request, 'mathapp/apps/games/games_index.html', {})

def tools(request):
	return render(request, 'mathapp/apps/tools/tools_index.html', {})

def algebrai(request):
	return render(request, 'mathapp/subjects/math/algebrai/algebrai_index.html', {})

def algebraii(request):
	return render(request, 'mathapp/subjects/math/algebraii/algebraii_index.html', {})

def calculusi(request):
	return render(request, 'mathapp/subjects/math/calculusi/calculusi_index.html', {})

def calculusii(request):
	return render(request, 'mathapp/subjects/math/calculusii/calculusii_index.html', {})

def geometry(request):
	return render(request, 'mathapp/subjects/math/geometry/geometry_index.html', {})

def precalculus(request):
	return render(request, 'mathapp/subjects/math/precalculus/precalculus_index.html', {})