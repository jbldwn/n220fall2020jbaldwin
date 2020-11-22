// Write the markup and CSS to place a square div on the page. 100px by 100px, green background.
// Make it so that when the div its clicked, it increases its size by 10% every time.

// Hints:

// Make a variable to store the height and with of the object
// to set the height and width, set to varName + "px"
// 10% is .1 bigger,or 1.1 * the original size

let dvBox = document.getElementById("box");
let dvSide = 100;

dvBox.style.width = "100px";
dvBox.style.height = "100px";
// dvBox.style.width = Number(dvSide);
// dvBox.style.height = Number(dvSide);
dvBox.style.backgroundColor = "#0c7d29";
dvBox.style.margin = "40px";

function growth(){
    
    dvSide *= 1.1;
    dvBox.style.width = dvSide + "px";
    dvBox.style.height = dvSide + "PX";
    console.log(dvSide);
}