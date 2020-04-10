<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <?php
            require_once("funkcje.php");
            echo "Zalogowano<br>";
            
            if(isSet($_GET['utworzCookie'])){
                // if(setcookie("FirstCookie", $_GET['czas'], time() + (86400*1), "/")){
                if(setcookie("FirstCookie", $_GET['czas'], time() + (20), "/")){
                    echo "Utworzono cookie<br>";
                }
            }
            if(isSet($_GET['czas'])){
                echo $_GET['czas'] . "<br>";
            }
        ?>
        <a href="index.php">INDEX</a>
    </body>
</html>