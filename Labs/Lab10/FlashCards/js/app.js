/*An application with 3 buttons that ask questions. 
For instance, they might ask "What is the capital of Indiana?". 
Each button should have a data-answer attribute that lists the answer.

When a button is clicked, display the answer to the button's question in a div. 
Use only one function, and that function must make use of the button's data-attribute.*/

//arrays for questions, and answers
let questionsArray = [
    "What fruit is Ross allergic to?", 
    "What is the name of Rachel and Monica’s building superintendent?", 
    "What was the name of Chandler’s roommate prior to Joey?"
];
let answersArray = [
    "Kiwi", 
    "Mr. Treeger.", 
    "Kip"
];

//create flashcards
for(i=0; i<3; i++){
    //retrieve div
    let questionDiv = document.getElementById("flashCards");

    //create div
    let qaDiv = document.createElement("div");

    //style divs
    qaDiv.style.height = 100 +"px";
    qaDiv.style.width = 150 +"px";
    qaDiv.style.margin = 5 +"px";
    qaDiv.style.float = "left";
    qaDiv.style.backgroundColor = "#8D6B94";
    qaDiv.innerHTML = questionsArray[i];

    //set answer
    qaDiv.setAttribute("data-answer", answersArray[i]);
    
    //add event listener
    qaDiv.addEventListener("click", showAnswer);
    
    //place elements on page
    questionDiv.appendChild(qaDiv)
}

//function for onClick
function showAnswer(event){
    event.target.innerHTML = event.target.getAttribute("data-answer");
    event.target.style.backgroundColor ="#F5B700"
}
