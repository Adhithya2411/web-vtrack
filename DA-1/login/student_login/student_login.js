document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("studentForm").addEventListener("submit", function (event) {
        if (!isValid()) {
            event.preventDefault();
        }
    });
});

function isValid(){
    var regno=document.forms["studentForm"]["regno"].value;
    let regex=/^[0-9]{2}[A-Z]{3}[0-9]{4}$/i;
    if(!regex.test(regno)){
        document.getElementById("regno_error").textContent="Invalid Registration Number";
        return false;
    }
    else{
        document.getElementById("regno_error").textContent="";
        return true;
    }
}