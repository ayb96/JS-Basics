let a = document.querySelector('#password');
let b = document.querySelector('#confirmation');

function clicks() {
    
    if(a !== b){
        a.style.border = "3px solid red";
        b.style.border = "3px solid red";
    } else{
        a.style.border = "unset";
        b.style.border = "unset";
    }
}


