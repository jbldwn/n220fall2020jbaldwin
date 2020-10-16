//creating the object
let myCircle = {
    x: 400,
    y: 300,
    w: 50,
    h: 50,
    //creating a function within the object about how to behave
    directionalOperator: function(){
        if (keyCode === UP_ARROW) {
            this.h -= 2;
        } else if (keyCode === DOWN_ARROW) {
            this.h += 2;
        }if (keyCode === LEFT_ARROW) {
            this.w -= 2;
        } else if (keyCode === RIGHT_ARROW) {
            this.w += 2;
        }
        //drawing the ellipse
        fill(206, 121, 107);
        ellipse(this.x, this.y, this.w, this.h);
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