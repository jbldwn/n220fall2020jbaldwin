//creating the object
let myCircle = {
    x: 400,
    y: 300,
    r: 50,
    //creating a function within the object about how to behave
    directionalOperator: function(){
        if (keyIsDown(UP_ARROW)) {
            this.y -= 2;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.y += 2;
        }if (keyIsDown(LEFT_ARROW)) {
            this.x -= 2;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
        }
        //drawing the circle
        fill(206, 121, 107);
        circle(this.x, this.y, this.r);
    }
};
function setup(){
    createCanvas(800, 600);
}
function draw(){
    noStroke();
    background(73, 88, 103);
    //summoning function to draw object
    myCircle.directionalOperator();
}