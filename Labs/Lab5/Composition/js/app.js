let circlesX = [];
let circlesY = [];
// let circleVelocity = 5;


function setup(){
    createCanvas(800, 600);
    background(121, 173, 220);
}

//records X and Y locations from each click for each Ball
function mouseClicked(){
    circlesY.push(mouseY);
    circlesX.push(mouseX);
}
function draw(){
    let circleVelocity = 5;
    background(121, 173, 220);
    strokeWeight(0);

    for(i=0; i < circlesY.length; i++){

        //draws balls
        circle(circlesX[i], circlesY[i] -circleVelocity, 30);

        //draws balls falling
        circlesY[i] += circleVelocity;

        //invisible box color function
        function collideTest(circleX, circleY, rectX, rectY, rectW, rectH){
            if(circleX > rectX && circleX < rectX + rectW) {
                if(circleY > rectY && circleY < rectY + rectH) {
                    fill(0, 129, 72);
                    circleVelocity *= -1;
                    return true;
                }
           }
           fill(209, 73, 91);
           return false;
       }
       
        //check hit line
        collideTest(circlesX[i], circlesY[i], 150, 200, 400, 300 );

        //removes values too large from array
        if(circlesY[i]>800){
            circlesY.shift();
            circlesX.shift();
        }
    }
}
