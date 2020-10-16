var stoplight = ["#d1495b","#e3c43c","#008148"]

function setup(){
    createCanvas(800, 600);
    background(121, 173, 220);
}
function draw(){
    //sets up the light box of the stoplight
    stroke(44, 54, 63);
    strokeWeight(1);
    fill(206, 138, 40);
    rect( 300, 100, 176, 400);

    //loop to redraw rectangles in various colors
    for(i=0; i<stoplight.length; i++){
        //dictates the color for the light
        fill(stoplight[i]);
        //draws the light in the color previously decided
        ellipse(390, 180+(i*120), 100);
    }
}