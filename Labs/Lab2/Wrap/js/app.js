var velocityx=0 
function setup(){
    createCanvas(800, 600);
    background(141, 153, 174);
    noStroke();
}
function draw(){
    velocityx=velocityx+5
    background(141, 153, 174);
    if(velocityx<801){
        ellipse(velocityx, 300, 25, 25)
        fill(200, 62, 77)
    }
    if(velocityx>801){
        velocityx=0
    }

}