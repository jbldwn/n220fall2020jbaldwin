/*Write the markup and JavaScript to place a square div on the page (100px x 100px), 
with a blue background. Using onmouseover and onmouseout (instead of "onclick"), 
change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves. */

//create div
let dvBox = document.createElement("div");
 
//elements of the div
dvBox.setAttribute('class', 'box')
dvBox.style.width = "100px"
dvBox.style.height = "100px"
dvBox.style.backgroundColor = "#1270a6"
 
//assign color
dvBox.onmouseover = function() {mouseOver()};
dvBox.onmouseout = function() {mouseOut()};
 
 
//prints div on page
document.documentElement.appendChild(dvBox)
 
//decide color
function mouseOver() {
  dvBox.style.backgroundColor = "#000000"
  console.log("over")
}
 
function mouseOut() {
  dvBox.style.backgroundColor = "#1270a6"
  console.log("out")
}