let txtSubtotal = document.getElementById("txtSubtotal");
let dvResultTip = document.getElementById("dvResultTip");
let dvResultTotal = document.getElementById("dvResultTotal");

function calculateTip(){
    let subtotal = Number(txtSubtotal.value);
    let tip = subtotal*.15
    let total = subtotal + tip
    
    console.log("Subtotal: $" + subtotal, "Tip: $" + tip, "Total: $" + total);
    dvResultTip.innerHTML = "Tip: $" + tip;
    dvResultTotal.innerHTML = "Total: $" + total;
}