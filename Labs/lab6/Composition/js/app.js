//creating the object
let myCircle = {
    x: 25,
    y: 35,
    w: 50,
    h: 50,
    //creating a function within the object about how to behave
    directionalOperator: function(){
        if (keyIsDown(UP_ARROW)) {
            this.h -= 2;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.h += 2;
        }if (keyIsDown(LEFT_ARROW)) {
            this.w -= 2;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.w += 2;
        }
        //drawing the ellipse
        fill(206, 121, 107);
        noStroke();

        for(i=0; i<800; i+=75){
            for(e=0; e<800; e+=75){
            ellipse(this.x+i, this.y+e, this.w, this.h)
            }
        }
            
        
        
    }
};
function setup(){
    createCanvas(800, 600);
}
function draw(){
    background(73, 88, 103);
    //summoning function to draw object
    myCircle.directionalOperator();
}