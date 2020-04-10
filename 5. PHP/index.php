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
            <fieldset>
                <legend>Panel logowania:</legend>
                Login: <input type='text' name='login'> <br>
                Hasło: <input type='password' name='password'><br>
                <input type='submit' name='zaloguj' value='Zaloguj'>
            </fieldset>
        </form>
        <form action="cookie.php" method="get">
            <fieldset>
                <legend>Ustaw wartość zmiennej cookie:</legend>
                <label for="czas">Wartość zmiennej cookie:</label>
                <input type='number' name='czas'>
                <input type='submit' name='utworzCookie' value='Utwórz cookie'>
            </fieldset>
        </form>
        <br>
        <a href="user.php">Przejdź do user.php</a>
        <?php
            if(isSet($_COOKIE['FirstCookie'])){
                echo $_COOKIE['FirstCookie'];
            }
        ?>
    </body>
</html>