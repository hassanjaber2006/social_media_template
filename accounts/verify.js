var password_input = document.getElementById('passwordLogin')
password_input.onkeyup = function(){
    var eye = document.getElementById('show-hide-p')
    if (password_input.value){
        eye.style.display = 'block' ;
    }
    else{
        eye.style.display = 'none' ;
    }
}