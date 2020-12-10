/*Write a loop that creates three divs based on the data in the array. 
You should only have one document.createElement in your code.*/

let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];

for(i=0; i<objects.length; i++){
    var curObject = objects[i];

    //create new element for object
    var newEl = document.createElement("div");

    //customize
    newEl.style.backgroundColor = curObject.color;
    newEl.style.height = curObject.height +"px";
    newEl.style.width = curObject.width +"px";

    //add to page
    document.body.appendChild(newEl);
}