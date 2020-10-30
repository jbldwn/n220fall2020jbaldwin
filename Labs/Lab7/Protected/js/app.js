let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvResult = document.getElementById("dvResult");


function securityCheck(){
    let username = txtUsername.value;
    let password = txtPassword.value;
    
   if(username=="Username" && password=="Password"){
    dvResult.innerHTML = "Success!";
   }else{
    dvResult.innerHTML = "Wrong information";
   }
}