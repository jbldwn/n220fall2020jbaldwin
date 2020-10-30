let txtDieSize = document.getElementById("txtDieSize");
let dvResult = document.getElementById("dvResult");


function rollDice(){
    let dieSize = Number(txtDieSize.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);
    console.log(randRoll);
    dvResult.innerHTML = randRoll;
}