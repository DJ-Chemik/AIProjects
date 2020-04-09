<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <?php
            if($_SESSION['zalogowany'] != 1){
                header("Location: index.php");
            }
            require_once("funkcje.php");
            echo "Zalogowano";
            
        ?>
        <br>
        Imie i nazwisko użytkownika: <?php echo $_SESSION['zalogowanyImie'] ?>
        <br>
        <a href="index.php">Przejdź do index.php</a>
    </body>
</html>