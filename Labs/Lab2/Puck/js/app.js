function setup(){
    createCanvas(400, 300);
    background(141, 153, 174)
}
function draw(){
    background(141, 153, 174)
    console.log(draw)
    ellipse(mouseX, mouseY, 25, 25)
    if(mouseX < 200){
        fill(8, 61, 119)
    } 
    else{
        fill(200, 62, 77)
    }
}