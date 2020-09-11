
let circlesize = 0;

function setup(){
    createCanvas(700, 500);
    noStroke();
}
function draw(){
    circlesize=circlesize+1
    if(circlesize<201){
        background(141, 153, 174)
        circle(350, 250, circlesize);
        fill(200, 62, 77);
    }
    if(circlesize>201){
        circlesize=0
}
}
