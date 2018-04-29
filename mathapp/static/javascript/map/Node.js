class Node {

    constructor(x, y, label, link) {
        this.x = x;
        this.y = y;
        this.label = label;
        this.link = link;

        var w = width < height ? width : height;
        this.radius = w / 6;

        // Setup the points
        this.points = [];
        for (var i = 0; i < 8; i++) {
            this.points.push([this.x + 0.5 * this.radius * sin(i * PI / 4), this.y + 0.5 * this.radius * cos(i * PI / 4)]);
        }
    }

    isMouseInside() {
        return sq(this.x - mouseX) + sq(this.y - mouseY) <= sq(this.radius / 2);
    }

    clickedOnto() {
        if (this.isMouseInside()) {
            window.open("127.0.0.1:8000");
        }
    }

    draw() {
        strokeWeight(1);
        stroke(0);
        textSize(this.radius / 6);
        textAlign(CENTER, CENTER);
        textFont("Arial");

        fill(this.isMouseInside() ? color(153, 255, 153) : 255);
        ellipse(this.x, this.y, this.radius, this.radius);
        fill(0);
        text(this.label, this.x, this.y);
    }

}