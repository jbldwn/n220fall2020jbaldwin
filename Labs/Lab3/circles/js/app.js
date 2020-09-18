var adjust=0
function setup(){
    createCanvas(1000, 1000);
    background(230, 190, 174);
}
function draw(){
    strokeWeight(7)
    stroke(69, 73, 85);
    fill(170, 118, 124)
    for(i=0; i<25;i++){
        var diameter=(25-i)*39
        ellipse(500, 500, diameter);
    }
}