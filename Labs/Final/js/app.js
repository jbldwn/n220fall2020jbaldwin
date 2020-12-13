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

let quoteDiv = document.getElementById("quote");
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
    faceCard.style.backgroundImage = "url(./assets/Door.jpg)";

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
    event.target.style.backgroundImage = "url(./assets/" + character + ".jpg)";

    //remove event listener
    event.target.removeEventListener("click", flipCard);

    //add tag to alert flipped
    event.target.className += "flipped";

    //push card data to array
    openCards.push(event.target.getAttribute("data-name"));

    //check for match
    matchCheck();

    if(openCards.length == 2 && matchpass == "true"){
        statusDiv.innerHTML = "Matched!";
        score += 10;
        scoreDiv.innerHTML = "Score: " + score;
        matchedPairs += 1;
        choiceOne = "Choose a card.";
        choiceTwo = "Choose a card.";
        setTimeout(markMatch, 2000);
        enableCard();

    }if(openCards.length == 2 && matchpass == "false"){
        setTimeout(cardReset, 2000)
        enableCard();

        //remove event listener
        // event.target.removeEventListener("click", flipCard);

        //lose life from incorrect guess and update lives
        life -= 1;
        lifeDiv.innerHTML = "Remaining lives: " + life;
        //return event listener
        let deck = document.getElementById("memory").childNodes;
        for(i=0; i< deck.length; i++ ){
        addEvent(deck[i], "click", flipCard)
        }
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

    // //remove event listener from all cards
    // let deck = document.getElementById("memory").childNodes;
    // for(i=0; i< deck.length; i++ ){
    //     removeEvent(deck[i], "click", flipCard)
    // }
    // flippedCards[1].removeEventListener("click", flipCard);
    // flippedCards[0].removeEventListener("click", flipCard);


    stripFlip();
    disableCard();
}

//Reset card
function cardReset(){
    flippedCards = document.getElementsByClassName("flipped");

    // while(flippedCards.length>0){
    //     flippedCards[].style.backgroundImage = "url(./assets/Door.jpg)";
    // }
    flippedCards[1].style.backgroundImage = "url(./assets/Door.jpg)";
    flippedCards[0].style.backgroundImage = "url(./assets/Door.jpg)";

    //restore instructions
    choiceOne = "Choose a card.";
    choiceTwo = "Choose a card.";
    cardOneDiv.innerHTML = "Card 1: " + choiceOne;
    cardTwoDiv.innerHTML = "Card 2: " + choiceTwo;

    openCards.splice(0, openCards.length);
    stripFlip();

    // //remove event listener from all cards
    // let deck = document.getElementById("memory").childNodes;
    // for(i=0; i< deck.length; i++ ){
    //     removeEvent(deck[i], "click", flipCard)
    // }
    disableCard();
}
//add event back to all child divs
function addEvent(element, event_name, func) {
    if (element.addEventListener) {
        element.addEventListener(event_name, func, false);
    } else if (element.attachEvent)  {
        element.attachEvent("on"+event_name, func);
    }
}
// //remove event back to all child divs
// function removeEvent(element, event_name, func) {
//     if (element.removeEventListener) {
//         element.removeEventListener(event_name, func, true);
//     } else if (element.attachEvent)  {
//         element.attachEvent("off"+event_name, func);
//     }
// }

//matchchecking process
function matchCheck(){
    //update variables
    choiceOne = openCards[0];
    choiceTwo = openCards[1];

    //keeps choiceTwo from being changed to "undefined"
    if(choiceTwo == null){
        choiceTwo = "Choose a card.";
    }else{
        choiceTwo = openCards[1];
    }

    //print choice selection
    cardOneDiv.innerHTML = "Card 1: " + choiceOne;
    cardTwoDiv.innerHTML = "Card 2: " + choiceTwo;

    //checking if match
    if(String(choiceOne) == "Ross" && String(choiceTwo) == "Rachel"){
        quoteDiv.innerHTML = "WE WERE ON A BREAK!";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Ross"){
        quoteDiv.innerHTML = "We were NOT on a break.";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Rachel"){
        quoteDiv.innerHTML = "They know you know.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Monica"){
        quoteDiv.innerHTML = "At least I didn't let some guy into my forest of my righteous truth on the first date!";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Monica" && String(choiceTwo) == "Phoebe"){
        quoteDiv.innerHTML = "You were going to cut me out?";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Phoebe"){
        quoteDiv.innerHTML = "You, like, totally let him wash his feet in your pool of inner power... and his puppet too!";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Monica" && String(choiceTwo) == "Rachel"){
        quoteDiv.innerHTML = "Its called Be your own Wind-Keeper. It's about how women need to become more empowered.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Monica"){
        quoteDiv.innerHTML = "Number 29: Have you ever betrayed another goddess for a ligtning bearer... Okay number 30!";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Rachel"){
        quoteDiv.innerHTML = "But there is wind! And the wind can make us goddesses. But you know who takes our wind? Men.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Joey"){
        quoteDiv.innerHTML = "They don't know that we know they know we know.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Phoebe"){
        quoteDiv.innerHTML = "Now enough of us know that we could just tell them we know.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Chandler" && String(choiceTwo) == "Joey"){
        quoteDiv.innerHTML = "Phoebe knows about us.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Chandler"){
        quoteDiv.innerHTML = "You can tell them you know they know, and I can go back to knowing absoultely nothing.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Monica" && String(choiceTwo) == "Joey"){
        quoteDiv.innerHTML = "But they don't know that we know that they know.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Joey" && String(choiceTwo) == "Monica"){
        quoteDiv.innerHTML = "You and... and you? How? When? IN LONDON!?";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Joey"){
        quoteDiv.innerHTML = "Joey, do they know that we know?";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Rachel" && String(choiceTwo) == "Gunther"){
        quoteDiv.innerHTML = "I love you too, probably not in the same way; but I do!";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Gunther" && String(choiceTwo) == "Rachel"){
        quoteDiv.innerHTML = "I know your leaving tonight, but I have to tell you. I love you.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Mike" && String(choiceTwo) == "Phoebe"){
        quoteDiv.innerHTML = "My name IS mike, and I DO play the piano.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Chandler" && String(choiceTwo) == "Monica"){
        quoteDiv.innerHTML = "When we're 40, if neither of us are married, what do you say you and I get together and have one?";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Monica" && String(choiceTwo) == "Chandler"){
        quoteDiv.innerHTML = "Okay, hypothetically, why won't I be married when I'm 40?";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Phoebe" && String(choiceTwo) == "Mike"){
        quoteDiv.innerHTML = "I changed my name: Princess Consuela Banana Hammock.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Mike" && String(choiceTwo) == "Monica"){
        quoteDiv.innerHTML = "Oh, by the way: I'm awesome.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Mike" && String(choiceTwo) == "Ross"){
        quoteDiv.innerHTML = "I have beer.";
        statusDiv.innerHTML = "Not a match.";
        matchpass = "false";
    }else if(String(choiceOne) == "Ross" && String(choiceTwo) == "Mike"){
        quoteDiv.innerHTML = "I have breastmilk.";
        statusDiv.innerHTML = "Not a match.";
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
    // element[1].classList.add("deck");
    // element[0].classList.add("deck");
    // for(i=1; i<0; i--){
    //     element[i].classList.remove("flipped");
    //     element[i].classList.add("deck");
    //     console.log(element);
    // }
}
//see if game is over
function gameComplete(){
    if(matchedPairs == 8){
        statusDiv.style.backgroundColor ="#E8C547";
        statusDiv.style.height= 50 + "px";
        statusDiv.style.width= 100 + "px";
        statusDiv.innerHTML = "You win! Replay?";
        statusDiv.addEventListener("click", replay);
        window.open('https://www.youtube.com/watch?v=SCQGnVrTsAM&ab_channel=ArifulHoque.com','_blank');
    }else if(life == 0){
        statusDiv.style.backgroundColor ="#957bac";
        statusDiv.style.height= 50 + "px";
        statusDiv.style.width= 100 + "px";
        statusDiv.innerHTML = "Game Over. Replay?";
        statusDiv.addEventListener("click", replay);
    }else{
    }
}
function replay(){
    window.location.reload();
}
function disableCard(){
    // var childNodes = document.getElementById("memory");
    // for (var node of childNodes) {
    //     node.disabled = true;
    // }
    document.getElementById("memory").disabled = true;
    console.log("is it disabled? ");
    // for(i=0; i< cardDisplay.length; i++  ){
    //     cardDisplay[i].disabled = true;
    // }
    
}
function enableCard(){
    // var childNodes = document.getElementById("memory");
    // for (var node of childNodes) {
    //     node.disabled = false;
    // }
    document.getElementById("memory").disabled = false;
    // // console.log(cardDisplay);
    // for(i=0; i< cardDisplay.length; i++  ){
    //     cardDisplay[i].disabled = false;
    // }
}