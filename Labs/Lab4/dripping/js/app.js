//empty array
let dropletsY = [ ];

var dropletVelocity = 5

function setup(){
    createCanvas(800, 600); 
    background("#FEFBEB");
    noStroke();
}
function draw(){
    background("#FEFBEB");
    fill("#79A9D1");

    //adds an object to array
    dropletsY.push(-50);

    //starts the loop for continuous droplets
    for(i=0; i<dropletsY.length; i++){
        
        //draws droplets falling down the screen
        if( i % 10 == 0){
        dropletsY[i] +=5;
        circle(400, dropletsY[i], 20);
        }
        //removes values that are too large from array
        if(dropletsY[i]>600){
            dropletsY.splice();
        }
    }

}