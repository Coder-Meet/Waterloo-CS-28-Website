email = document.getElementById("Email")

email.addEventListener("blur", emailValidator);

function emailValidator (event){
    email = event.target.value
    
    if (/^([A-Za-z]|[0-9])+$/.test(email)){
        console.log("Valid Email")
    }

    else{
        console.log("Invalid Email")
    }
}