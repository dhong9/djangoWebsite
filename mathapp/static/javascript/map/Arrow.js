class Arrow {

    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    draw() {
        stroke(0);
        strokeWeight(1);
        var d = atan((this.point2[1] - this.point1[1]) / (this.point2[0] - this.point1[0])) + PI;
        var r = sqrt(sq(this.point2[1] - this.point1[1]) + sq(this.point2[0] - this.point1[0])) / 4;
        line(this.point1[0], this.point1[1], this.point2[0], this.point2[1]);
        line(this.point2[0], this.point2[1], this.point2[0] + r * cos(d + PI / 8),
            this.point2[1] + r * sin(d + PI / 8));
        line(this.point2[0], this.point2[1], this.point2[0] + r * cos(d - PI / 8),
            this.point2[1] + r * sin(d - PI / 8));
    }

}