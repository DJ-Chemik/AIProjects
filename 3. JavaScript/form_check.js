function validate(form){
    let name = form.elements["f_imie"];
    let surname = form.elements["f_nazwisko"];
    let zipCode = form.elements["f_kod"];   
    let street = form.elements["f_ulica"];
    let town = form.elements["f_miasto"];
    let mail = form.elements["f_email"];
    const fields = [name, surname, zipCode, street, town];
    let result = true;
    
    
    for (let i=0; i<fields.length; i++){
       if (checkStringAndFocus(fields[i], "Błąd", isWhiteSpaceOrEmpty)==false){
           result=false;
       }
    }
    if (checkStringAndFocus(mail, "Błędny e-mail!", isEmailInvalid)==false){
        result=false;
    }
    return result;
}

function hide(){
    alert("H1");
    hideElement("NazwiskoPanienskie");
    alert("H2");
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}

function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';

}

function checkStringAndFocus(obj, msg, validateFunction){
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (validateFunction(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        document.getElementById(errorFieldName).style.visibility="visible";
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).style.visibility="hidden";
        return true;
    }
}
   

function isEmailInvalid(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str)){
        return false;
    }else {
        return true;
    }
}

function isWhiteSpaceOrEmpty(text){
    return /^[\s\t\r\n]*$/.test(text);
}

