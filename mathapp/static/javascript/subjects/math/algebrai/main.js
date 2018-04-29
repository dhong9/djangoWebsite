var numbers, variables, expressions, functions, sets, relations;
var nodes;
var num_set, set_relations, relations_func, num_var, var_exp, exp_relations;
var arrows;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	var baseString = "subjects/math/algebrai/";
	numbers = new Node(width / 8, height / 2, "Numbers",  `${baseString }numbers/numbers_index.html`);
    variables = new Node(5 * width / 16, height / 2, "Variables", "variables");
    expressions = new Node(width / 2, height / 2, "Expressions", "expressions");
    functions = new Node(11 * width / 16, height / 2, "Functions", "functions");
    sets = new Node(5 * width / 16, height / 4, "Sets", "sets");
    relations = new Node(width / 2, height / 4, "Relations", "relations");

    nodes = [numbers, variables, expressions, functions, sets, relations];

    num_set = new Arrow(numbers.points[3], sets.points[7]);
    set_relations = new Arrow(sets.points[2], relations.points[6]);
    relations_func = new Arrow(relations.points[1], functions.points[5]);
    num_var = new Arrow(numbers.points[2], variables.points[6]);
    var_exp = new Arrow(variables.points[2], expressions.points[6]);
    exp_relations = new Arrow(expressions.points[4], relations.points[0]);

    arrows = [num_set, set_relations, relations_func, num_var, var_exp, exp_relations];
}

function windowResized() {
	setup();
}

function draw() {
	background(180, 230, 237);
	nodes.forEach(i => i.draw());
	arrows.forEach(i => i.draw());
}

function mouseClicked() {
	nodes.forEach(i => {
		if (i.isMouseInside()) {
			let request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			request.open("GET", `http://127.0.0.1:8000/${i.link}`, false);
			window.open(request.status === 200 ? `http://dhong9.pythonanywhere.com/${i.link}` : `http://127.0.0.1:8000/${i.link}`);
		}
	});
}