function validate(form){
    let condition = isEmpty(form.elements["f_imie"].value);
    if (condition){
        alert("Podaj imię!");
        return false;
    }else{
        return true;
    }
}

function isEmpty(text){
    if (text.length==0){
        return true;
    }else{
        return false;
    }
}
