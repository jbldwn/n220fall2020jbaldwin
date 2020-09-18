xcord=0
function setup(){
    createCanvas(1600, 1200)
    background(245, 233, 226)
}
function shapeX(){
    
    fill(35, 31, 32);
}
function draw(){
    xcord=xcord+35
    background(245, 233, 226)
    for(i=0; i<1600;i++){
        strokeWeight(0)
        console.log(i);
        fill(35, 31, 32)
        if(i%3===0){
            fill(137, 49, 104);
            ellipse((i*60), 600, 50);
        }if(i%5===0){
            fill(15, 82, 87);
            square((i*60)-25, 600-25, 50);
        }if((i%3)*5===(i%5)*3){
            fill(5, 60, 94);
            square((i*60)-25, 600-25, 50);
        }else { 
            ellipse((i*60), 600, 50);
        }
    }
}