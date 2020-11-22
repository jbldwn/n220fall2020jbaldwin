/*Write a loop that puts 100 square divs (20px x 20px) on the page, each with a 
different background color. Set their float CSS attribute to left. */

//create 100 divs
for( y = 0; y<100; y++){
    let target = document.querySelector("#target"); //tells where to print div
    let dvBox = document.createElement("div");      //creates div
    dvBox.style.margin = "2px";
    dvBox.style.float = "left";
    dvBox.style.width = "20px";
    dvBox.style.height = "20px";
    dvBox.style.backgroundColor = randomColor();    //run random color
    target.appendChild(dvBox);                      //prints div on page
}
//assign random color
function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}