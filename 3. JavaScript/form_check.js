function validate(form){
    let text = form.elements["f_imie"].value;
    let condition1 = isEmpty(text);
    let condition2 = isWhiteSpaceOrEmpty(text);
    if (condition1 || condition2){
        alert("Podaj imię!");
        return false;
    }else{
        return true;
    }
}

function isWhiteSpaceOrEmpty(text){
    return /^[\s\t\r\n]*$/.test(text);
}

function isEmpty(text){
    if (text.length==0){
        return true;
    }else{
        return false;
    }
}
