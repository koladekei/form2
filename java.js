 function operation (){
    let password = document.querySelector("#pass").value
    let confirm = document.querySelector("#conpass").value

    if (password === confirm){
        alert("access granted")

    }else{
        alert ("access denied")
}}