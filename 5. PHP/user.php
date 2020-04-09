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
        <form action="index.php" method="post">
            <input type='submit' name='wyloguj' value='wyloguj'>
        </form>
        <form action='user.php' method='POST' enctype='multipart/form-data'>
            <input name="myfile" type="file" name="upload">
        </form>
        <?php
            if(isSet($_POST["upload"])){
                $currentDir = getcwd();
                $uploadDir = "/";
                $fileName = $_FILES['myfile']['name'];
                $fileSize = $_FILES['myfile']['size'];
                $fileTmpName = $_FILES['myfile']['tmp_name'];
                $fileType = $_FILES['myfile']['type'];
                if($fileName != "" && (
                    $fileType == 'image/png' || $fileType == 'image/jpeg' ||
                    $fileType == 'image/PNG' || $fileType == 'image/JPEG')
                ){
                    $uploadPath = $currentDir . $uploadDir . $fileName;
                    if(move_uploaded_file($fileTmpName, $uploadPath)){
                        echo "Trwa ładowanie zdjęcia na serwer FTP";
                    }
                }
            }
        ?>
        <img src="fotka.png" alt="Niespodziankowa fotka">
    </body>
</html>