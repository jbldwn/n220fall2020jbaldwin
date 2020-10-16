//creating the object
let myCircle = {
    x: 0,
    y: 0,
    r: 5,
    //creating a function within the object about how to behave
    moving: function(){
        fill(206, 121, 107);
        circle(this.x, this.y, this.r);
        this.x += 1;
        this.y += 1;
        this.r += 1;
    }
};
//testing
function setup(){
    createCanvas(800, 600);
}
function draw(){
    background(73, 88, 103);
    //summoning function to draw object
    myCircle.moving();
}