<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <h1> Nasz system </h1>
        <?php
            require("funkcje.php");
            if(isset($_POST["wyloguj"])){
                $_SESSION['zalogowany'] = 0;
            }
        ?>
        <form action="logowanie.php" method="post">
            Login: <input type='text' name='login'> <br>
            Hasło: <input type='password' name='password'><br>
            <input type='submit' name='zaloguj' value='zaloguj'>
        </form>
        <a href="user.php">Przejdź do user.php</a>
        
    </body>
</html>