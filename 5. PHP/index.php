<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <h1> Nasz system </h1>

        <?php
            if(isSet($_POST["zaloguj"])){
                $login = $_POST["login"];
                $password = $_POST["password"];
                echo "Przesłany login: " . $login . "<br>";
                echo "Przesłane hasło: " . $password . "<br>";
            }
        ?>

        <form action="index.php" method="post">
            Login: <input type='text' name='login'> <br>
            Hasło: <input type='password' name='password'><br>
            <input type='submit' name='zaloguj' value='zaloguj'>
        </form>
        
    </body>
</html>