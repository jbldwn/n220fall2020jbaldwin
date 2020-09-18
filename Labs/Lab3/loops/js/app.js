var sizes =[125, 89, 249, 91, 296, 236, 156, 288, 215, 211, 132, 100, 36, 190, 24, 22, 120, 206, 96, 86]

function setup(){
    createCanvas(800, 800);
    background(170, 118, 124);
}
function draw(){
    
    for(x=0; x<20; x++){
        var boxSize = sizes[x] //get variation of box sizes
        strokeWeight(0);
        fill(170, Math.random()*118, Math.random()*100); //random colors that stay in a color family
        rect(Math.random()*700, (x*35), boxSize); //varying box locations and sizes
    }
       unclear();//without something here, the code loops infinately. but can't figure out why. 
}