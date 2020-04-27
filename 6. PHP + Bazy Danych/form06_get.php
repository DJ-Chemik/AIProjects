<?php session_start(); ?>
<a href="form06_post.php">STRONA DODAWANIA</a><br>
<?php
    $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
    if(isset($_SESSION['info'])){
        echo "<fieldset>";
        echo $_SESSION['info'];
        echo "<br>";
        unset($_SESSION['info']);
        echo "</fieldset>";
    }
    if (!$link) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    $sql = "SELECT * FROM pracownicy";
    $result = $link->query($sql);
    foreach ($result as $v) {
        echo $v["ID_PRAC"]." ".$v["NAZWISKO"]."<br/>";
    }
    $result->free();
    $link->close();
?>