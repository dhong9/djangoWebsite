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

        var draw = function() {
            // Prepare the canvas
            background(180, 230, 237);
            lights();

            // Outer sandbox
            translate(width / 2, height / 2);
            rotateY(angle);
            rotateX(-PI/16);
            fill(217, 217, 217);
            box(width / 2, width / 8, width / 2);
            rotateX(PI/16);
            rotateY(-angle);
            translate(-width / 2, -height / 2);

            // Sand
            translate(width  / 2, height / 2 - (0.75 * width / 32));
            rotateY(angle);
            rotateX(-PI/16);
            fill(239, 221, 111);
            box(width / 3, 0.75 * width / 8, width / 3);
            rotateX(PI/16);
            rotateY(-angle);
            translate(-width / 2, -(height / 2 - (0.75 * width / 32)));


            degrees += 0.125 / (2 * PI);
            angle = degrees % (2 * PI);
        };
    }
};

var canvas = document.getElementById("sandboxCanvas");
var processingInstance = new Processing(canvas, sketchProc);