<?php session_start(); ?>
<?php
    require("funkcje.php");
    if(isSet($_POST["zaloguj"])){
        $login = $_POST["login"];
        $password = $_POST["password"];
        if($login==$osoba1->login && $password==$osoba1->haslo){
            $_SESSION['zalogowanyImie'] = $osoba1->imieNazwisko;
            $_SESSION['zalogowany'] = 1;
            header("Location: user.php");
        }else if($login==$osoba2->login && $password==$osoba2->haslo){
            $_SESSION['zalogowanyImie'] = $osoba2->imieNazwisko;
            $_SESSION['zalogowany'] = 1;
            header("Location: user.php");
        }else{
            header("Location: index.php");
        }
        // echo "Przesłany login: " . $login . "<br>";
        // echo "Przesłane hasło: " . $password . "<br>";
    }
?>