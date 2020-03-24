function validate(form){
    let name = form.elements["f_imie"];
    let surname = form.elements["f_nazwisko"];
    let zipCode = form.elements["f_kod"];   
    let street = form.elements["f_ulica"];
    let town = form.elements["f_miasto"];
    let mail = form.elements["f_email"];
    const fields = [name, surname, zipCode, street, town];
    // checkString(name.value, "Podaj imie!");
    // checkString(surname.value, "Podaj nazwisko!");
    // checkEmail(mail.value);
    // checkString(zipCode.value, "Podaj kod pocztowy!");
    // checkString(street.value, "Podaj ulice!");
    // checkString(town.value, "Podaj miasto!");
    let result = true;
    if (checkEmailAndFocus(mail, "Błędny e-mail!")==false){
        result=false;
    }
    for (let i=0; i<fields.length; i++){
       if (checkStringAndFocus(fields[i], "Błąd")==false){
           result=false;
       }
    }
    return false;
    

}

function checkStringAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        document.getElementById(errorFieldName).focus();
        //obj.focus();
        return false;
    }
    else {
        return true;
    }
}

function checkEmailAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (!checkEmail(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        return true;
    }
}
   

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        //alert("Podaj właściwy e-mail");
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
