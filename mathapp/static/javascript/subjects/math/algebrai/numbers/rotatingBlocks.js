var sketchProc = function(processingInstance) {
    with (processingInstance) {
        var degrees = 0, angle = degrees % (2 * PI);

        var setup = function() {
            if (screen.width < screen.height) {
                size(screen.width / 2, screen.width / 2, P3D);
            } else {
                size(screen.height / 2, screen.height / 2, P3D);
            }
            frameRate(60);
            noStroke();
        }

        // Main draw loop
        var draw = function() {
            // Prepare the canvas
            background(180, 230, 237);
            lights();

            // Draw a box (left)
            fill(255, 255, 128); // Color the box bright yellow
            translate(width / 4, height / 2);
            rotateY(angle);
            box(width / 4);
            rotateY(-angle);
            translate(-width / 4, -height / 2);

            // Draw a box (right)
            fill(153, 255, 153); // Color the box bright green
            translate(3 * width / 4, height / 2, -width / 4);
            rotateX(-angle);
            box(width / 4);
            rotateX(angle);
            translate(-3 * width / 4, -height / 2, width / 4);

            degrees += 0.25 / (2 * PI);
            angle = degrees % (2 * PI);
        }
    }
};

var canvas = document.getElementById("mycanvas");
var processingInstance = new Processing(canvas, sketchProc);