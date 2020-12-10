var txtSentence = document.getElementById("txtSentence");
var txtOutput = document.getElementById("txtAverage");
var txtOutput = document.getElementById("txtSum");
var total = 0;

function computeData(){
    var inputString = txtSentence.value;
    var splitString = inputString.split(",")
    var splitStringNum = splitString.map(Number);
    console.log(splitString);

    for(x=0; x<splitStringNum.length; x++){
    total += splitStringNum[x]
    }
    txtSum.innerHTML = "Total: " + total;
    txtAverage.innerHTML = "Average: " + total/splitStringNum.length;
}
