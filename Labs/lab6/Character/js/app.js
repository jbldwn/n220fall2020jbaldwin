//creating the object
let myCircle = {
    x: 400,
    y: 300,
    r: 50,
    //creating a function within the object about how to behave
    directionalOperator: function(){
        if (keyCode === UP_ARROW) {
            this.y -= 2;
        } else if (keyCode === DOWN_ARROW) {
            this.y += 2;
        }if (keyCode === LEFT_ARROW) {
            this.x -= 2;
        } else if (keyCode === RIGHT_ARROW) {
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
    background(73, 88, 103);
    //summoning function to draw object
    myCircle.directionalOperator();
}