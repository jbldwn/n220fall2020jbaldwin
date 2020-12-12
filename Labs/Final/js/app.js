/*Create a version of the 'classic' game of memory (aka concentration). 
There should be a 4 x 4 grid of cards laid out face-down in front of the user. 
When clicked, reveal the face of a card. 
When a second card is tapped, reveal the face of that card as well. 
If the two cards match, remove them from the game. 
If they don’t, return them to face-down and allow the user to choose two more.

Requirements:

[X] A 4x4 grid of facedown cards
[X] Reveal the value of a facedown card on click
[x] If two revealed cards match, remove them
[X] If two revealed cards do not match, return them to face down
[X] A ‘replay game’ option when the game is over
[X] Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
*/

let openCards = []
let friendsArray = ["Ross", "Joey", "Chandler", "Rachel", "Monica", "Phoebe", "Mike", "Gunther","Ross", "Joey", "Chandler", "Rachel", "Monica", "Phoebe", "Mike", "Gunther"]

let cardOneDiv = document.getElementById("cardOne");
let cardTwoDiv = document.getElementById("cardTwo");
let statusDiv = document.getElementById("gameStatus");
let scoreDiv = document.getElementById("score");
let lifeDiv = document.getElementById("life");
let score = 0;
let life = 7;
let choiceOne = "Choose a card.";
let choiceTwo = "Choose a card.";
let matchpass = "false";
let matchedPairs = 0;

//establish remaining lives:
lifeDiv.innerHTML = "Remaining lives: " + life;

//establish score
scoreDiv.innerHTML = "Score: " + score;

//establish current card selection
cardOneDiv.innerHTML = "Card 1: " + choiceOne;
cardTwoDiv.innerHTML = "Card 2: " + choiceTwo;

//Board size
let gameboard = document.getElementById("memory");
gameboard.style.height = 685 +"px";
gameboard.style.width = 685 +"px";

//Shuffle Array (Knuth Shuffle)

shuffle(friendsArray);
console.log(friendsArray);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    //while there are items remainint to shuffle
    while (currentIndex !== 0) {
    
    //pick an element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    //replace with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
}

//create flashcards
for(i=0; i<friendsArray.length; i++){
    //retrieve div
    let game = document.getElementById("memory");

    //create div
    let faceCard = document.createElement("div");

    //style divs
    faceCard.style.height = 150 +"px";
    faceCard.style.width = 150 +"px";
    faceCard.style.margin = 10 +"px";
    faceCard.style.float = "left";
    faceCard.style.backgroundPosition= "center";
    faceCard.style.backgroundSize= "cover";
    faceCard.style.backgroundImage = "url(./assets/door.jpg)";

    //instructions
    statusDiv.innerHTML = "Pick 2 cards.";

    //set answer
    faceCard.setAttribute("data-name", friendsArray[i]);
    
    //add event listener
    faceCard.addEventListener("click", flipCard);

    //place elements on page
    game.appendChild(faceCard);
}

function flipCard(event){
    let character = event.target.getAttribute("data-name");

    //change background
    event.target.style.backgroundImage = "url(./assets/"+character+".jpg)";

    //add tag to alert flipped
    event.target.className += "flipped";

    //push card data to array
    openCards.push(event.target.getAttribute("data-name"));
    console.log(openCards);

    //check for match
    matchCheck();
    
    if(openCards.length == 2 && matchpass == "true"){
        statusDiv.innerHTML = "Matched!";
        score += 10;
        scoreDiv.innerHTML = "Score: " + score;
        matchedPairs += 1;
        console.log(matchedPairs);
        choiceOne = "Choose a card.";
        choiceTwo = "Choose a card.";
        setTimeout(markMatch, 2000);

    }if(openCards.length == 2 && matchpass == "false"){
        setTimeout(cardReset, 2000)
        life -= 1;
        lifeDiv.innerHTML = "Remaining lives: " + life;
    }else{
    }
    gameComplete();
}

//mark cards as a match
function markMatch(){
    flippedCards = document.getElementsByClassName("flipped");
    

    //remove div
    flippedCards[1].style.backgroundImage = "none";
    flippedCards[0].style.backgroundImage = "none";

    //print instructions
    cardOneDiv.innerHTML = "Card 1: " + choiceOne;
    cardTwoDiv.innerHTML = "Card 2: " + choiceTwo;

    //reset array and class
    openCards.splice(0, openCards.length);

    //remove event listener
    flippedCards[1].removeEventListener("click", flipCard);
    flippedCards[0].removeEventListener("click", flipCard);
    
    stripFlip();
}

//Reset card
function cardReset(){
    flippedCards = document.getElementsByClassName("flipped");

    flippedCards[1].style.backgroundImage = "url(./assets/door.jpg)";
    flippedCards[0].style.backgroundImage = "url(./assets/door.jpg)";

    choiceOne = "Choose a card.";
    choiceTwo = "Choose a card.";
    cardOneDiv.innerHTML = "Card 1: " + choiceOne;
    cardTwoDiv.innerHTML = "Card 2: " + choiceTwo;

    console.log(openCards);
    openCards.splice(0, openCards.length);
    console.log(openCards);
    stripFlip();
}

//matchchecking process
function matchCheck(){
    //update variables
    choiceOne = openCards[0];
    choiceTwo = openCards[1];

    //keeps choiceTwo from being changed to "undefined"
    if(choiceTwo == null){
        choiceTwo = "Choose a card.";
        console.log("it worked")
    }else{
        choiceTwo = openCards[1];
    }    

    //print choice selection
    cardOneDiv.innerHTML = "Card 1: " + choiceOne;
    cardTwoDiv.innerHTML = "Card 2: " + choiceTwo;

    //checking if match
    if(String(choiceOne) == "Ross" && String(choiceTwo) == "Rachel"){
        statusDiv.innerHTML = "WE WERE ON A BREAK! (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Ross"){
        statusDiv.innerHTML = "We were NOT on a break. (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Rachel"){
        statusDiv.innerHTML = "They know you know. (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Rachel"){
        statusDiv.innerHTML = "They don't know that we know they know we know. (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Joey"){
        statusDiv.innerHTML = "So they know you know, and they don't know that Rachel Knows.";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Phoebe"){
        statusDiv.innerHTML = "Now enough of us know that we could just tell them we know. (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Chandler" && String(choiceTwo) == "Joey"){
        statusDiv.innerHTML = "Phoebe knows about us. (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Chandler"){
        statusDiv.innerHTML = "You can tell them you know they know, and I can go back to knowing absoultely nothing.";
        matchpass = "false";
    }else if(String(choiceOne) == "Monica" && String(choiceTwo) == "Joey"){
        statusDiv.innerHTML = "But they don't know that we know that they know. (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Rachel"){
        statusDiv.innerHTML = "They know you know.";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Joey"){
        statusDiv.innerHTML = "Joey, do they know that we know? (Not a match).";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Rachel"){
        statusDiv.innerHTML = "They don't know that we know they know we know. (Not a match).";
        matchpass = "false";
    }else if(choiceOne == choiceTwo){
        matchpass = "true";
    } else{
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }
    
}

//reset flipped status
function stripFlip(){
    var element = document.getElementsByClassName("flipped");
    element[1].classList.remove("flipped");
    element[0].classList.remove("flipped");
    
}
//see if game is over
function gameComplete(){
    if(matchedPairs == 8){
        statusDiv.innerHTML = "You win!";
        //replay button
        let replayDiv = document.getElementById("replay");
        replayDiv.style.backgroundColor ="#E8C547";
        replayDiv.style.height= 50 + "px";
        replayDiv.style.width= 100 + "px";
        replayDiv.innerHTML = "replay?";
        replayDiv.addEventListener("click", replay);
        window.open('https://www.youtube.com/watch?v=SCQGnVrTsAM&ab_channel=ArifulHoque.com','_blank');
    }else if(life == 0){
        statusDiv.innerHTML = "Game Over";
        let replayDiv = document.getElementById("replay");
        replayDiv.style.backgroundColor ="#957bac";
        replayDiv.style.height= 50 + "px";
        replayDiv.style.width= 100 + "px";
        replayDiv.innerHTML = "replay?";
        replayDiv.addEventListener("click", replay);
    }else{
    }
}
function replay(){
    window.location.reload();
}
