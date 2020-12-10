var txtSentence = document.getElementById("txtSentence");
var txtFound = document.getElementById("txtFound");
var txtSum = document.getElementById("txtSum");
var total = 0;
var foundFlag = false;

function computeData(){
    var inputString = txtSentence.value;
    var splitString = inputString.split(" ");

    console.log(splitString);

    for(x=0; x<splitString.length; x++){
        search= splitString[x];
        if(search=="clear"){
            foundFlag = true;
            total += 1;
        }else if(search=="water"){
            foundFlag = true;
            total += 1;
        }else if(search=="tires"){
            foundFlag = true;
            total += 1;
        }
        console.log(foundFlag);
    }
    if(foundFlag == true){
        txtFound.innerHTML = "Bad Words Found!"
        txtSum.innerHTML = "Used: " + total;
    } else{
        txtFound.innerHTML = "No Bad Words Found!"
    }
    
}
