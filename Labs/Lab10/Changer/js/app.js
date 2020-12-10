/*Create an application with three grey, square divs, in a row. 
They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element. 
Each element should change to a different color: one red, one green, and one blue. 
Use a data attribute on the elements to store the color to be changed to.*/
let element = document.getElementById("changer");

let colorArray = ["#C84630", "#32DE8A", "#82A6B1"];

//create loop to make 3 gray divs
for(var i= 0; i < 3; i++) {

    //create new element
    let changer = document.createElement("div");

    //style the div
    changer.style.height = 200 + "px";
    changer.style.width = 200 + "px";
    changer.style.backgroundColor = "#484F70";
    changer.style.margin = 5+"px";
    changer.style.float= "left";

    //get colors from array
    changer.setAttribute("div-color", colorArray[i]);

    //add event listener to change color
    changer.addEventListener("click", changeColor);

    //add to page
    document.body.appendChild(changer);
}

//when clicked, change color
function changeColor(event){
    event.target.style.backgroundColor = event.target.getAttibute("div-color");
}
