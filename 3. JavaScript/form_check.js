function validate(form){
    let name = form.elements["f_imie"].value;
    let surname = form.elements["f_nazwisko"].value;
    let zipCode = form.elements["f_kod"].value;   
    let street = form.elements["f_ulica"].value;
    let town = form.elements["f_miasto"].value;
    let mail = form.elements["f_email"].value;
    const texts = [name, surname, zipCode, street, town];
    checkString(name, "Podaj imie!");
    checkString(surname, "Podaj nazwisko!");
    checkEmail(mail);
    checkString(zipCode, "Podaj kod pocztowy!");
    checkString(street, "Podaj ulice!");
    checkString(town, "Podaj miasto!");
    

}

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        alert("Podaj właściwy e-mail");
        return false;
    }
}

function checkString(text, message){
    let condition1 = isEmpty(text);
    let condition2 = isWhiteSpaceOrEmpty(text);
    if (condition1 || condition2){
        alert(message);
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
