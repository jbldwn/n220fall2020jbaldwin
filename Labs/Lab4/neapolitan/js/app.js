//array of colors in neapolitan 
let flavors =[ "#59544B", "#FEFBEB", "#efc7c2"];
function setup(){
    createCanvas(800, flavors.length*200);
    noStroke()
}
function draw(){
    //loop to redraw rectangles in various colors
    for(var i = 0; i<flavors.length; i++){
    //dictates the color for the square
    fill(flavors[i]);
    //draws the square in the color previously decided
    rect(0, 0+(i*200), 800, 200);
    }
}