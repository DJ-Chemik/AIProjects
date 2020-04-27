<?php session_start(); ?>
<a href="form06_get.php">STRONA POBIERANIA INFORMACJI</a><br>
<?php
    if(isset($_SESSION['info'])){
        echo "<fieldset>";
        echo $_SESSION['info'];
        echo "<br>";
        unset($_SESSION['info']);
        echo "</fieldset>";
    }
    print<<<KONIEC
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    </head>
    <body>
        <form action="form06_redirect.php" method="POST">
            id_prac <input type="text" name="id_prac">
            nazwisko <input type="text" name="nazwisko">
            <input type="submit" name="Wstaw" value="Wstaw">
            <input type="reset" value="Wyczysc">
        </form>
    KONIEC;

?>