/*This is an application that will start a div at a black color, 
and as a user presses buttons associated with RGB, the div will change to new colors. 
The button presses should affect additively - that is. If a div is currently blue, 
pressing +red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by.*/

//establish color varables and values
let colorRed = 0;
let colorGreen = 0;
let colorBlue = 0;

//creat an array for the button variables
let colorButtonArray = [1, 5, 10];

//creat mixedColor div
let mixedColorWindow = document.getElementById("mixedColor");
let colorWindow = document.createElement("div");

//style window
colorWindow.style.height = 500 + "px";
colorWindow.style.width = 700 + "px";
colorWindow.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";

//print to page
mixedColor.appendChild(colorWindow);

//Display Color mix
let displayColors = document.getElementById("displayColorMix");
let displayDiv = document.createElement("div");

displayDiv.innerHTML = "Red: " + colorRed + " Green: " + colorGreen + " Blue: " + colorBlue;

displayColors.appendChild(displayDiv);

//Create Buttons

//Red
for(i=0; i<3; i++){
    //retrieve div
    let redColorButtons = document.getElementById("addRed");

    //create the div
    let createRed = document.createElement("div");

    //style them
    createRed.style.height = 50 + "px";
    createRed.style.width = 70 + "px";
    createRed.style.float = "left";
    createRed.style.backgroundColor = "#999";
    createRed.style.margin = 5 + "px";
    createRed.innerHTML = "Red + " + colorButtonArray[i];

    //create values in each box
    createRed.setAttribute("data-color", colorButtonArray[i]);

    //add listener
    redColorButtons.addEventListener("click", mixRed);

    //place divs
    redColorButtons.appendChild(createRed);
}

//function for when red buttons are clicked
function mixRed(event){
    let moreRed = Number(event.target.getAttribute("data-color"));
    colorRed += moreRed;
    colorWindow.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    displayDiv.innerHTML = "Red: " + colorRed + " Green: " + colorGreen + " Blue: " + colorBlue;
}

//Green
for(i=0; i<3; i++){
    //retrieve div
    let greenColorButtons = document.getElementById("addGreen");

    //create the div
    let createGreen = document.createElement("div");

    //style them
    createGreen.style.height = 50 + "px";
    createGreen.style.width = 70 + "px";
    createGreen.style.float = "left";
    createGreen.style.backgroundColor = "#999";
    createGreen.style.margin = 5 + "px";
    createGreen.innerHTML = "Green + " + colorButtonArray[i];

    //create values in each box
    createGreen.setAttribute("data-color", colorButtonArray[i]);

    //add listener
    greenColorButtons.addEventListener("click", mixGreen);

    //place divs
    greenColorButtons.appendChild(createGreen);
}

//function for when green buttons are clicked
function mixGreen(event){
    let moreGreen = Number(event.target.getAttribute("data-color"));
    colorGreen += moreGreen;
    colorWindow.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    displayDiv.innerHTML = "Red: " + colorRed + " Green: " + colorGreen + " Blue: " + colorBlue;
}

//Blue
for(i=0; i<3; i++){
    //retrieve div
    let blueColorButtons = document.getElementById("addBlue");

    //create the div
    let createBlue = document.createElement("div");

    //style them
    createBlue.style.height = 50 + "px";
    createBlue.style.width = 70 + "px";
    createBlue.style.float = "left";
    createBlue.style.backgroundColor = "#999";
    createBlue.style.margin = 5 + "px";
    createBlue.innerHTML = "Blue + " + colorButtonArray[i];

    //create values in each box
    createBlue.setAttribute("data-color", colorButtonArray[i]);

    //add listener
    blueColorButtons.addEventListener("click", mixBlue);

    //place divs
    blueColorButtons.appendChild(createBlue);
}

//function for when blue buttons are clicked
function mixBlue(event){
    let moreBlue = Number(event.target.getAttribute("data-color"));
    colorBlue += moreBlue;
    colorWindow.style.backgroundColor = "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
    displayDiv.innerHTML = "Red: " + colorRed + " Green: " + colorGreen + " Blue: " + colorBlue;
}