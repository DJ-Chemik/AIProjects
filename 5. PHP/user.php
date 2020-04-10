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
        <form action="index.php" method="post">
            <fieldset>
                <legend>Panel wylogowywania:</legend>
                <input type='submit' name='wyloguj' value='Wyloguj się'>
            </fieldset>
        </form>
        <form action='user.php' method='post' enctype='multipart/form-data'>
            <fieldset>
                <legend>Panel dodawania pliku:</legend>
                <input type="file" name="myfile"/>
                <input type="submit" name="upload" value="Prześlij plik" />
            </fieldset>
        </form>
        <a href="index.php">Przejdź do index.php</a>
        <?php
            if(isSet($_POST["upload"])){
                $currentDir = getcwd();
                $uploadDir = "/";
                // $uploadDir = "\\fotki\\"; //NIE DZIAŁA.... :(
                // $uploadDir = "/fotki/"; //NIE DZIAŁA.... :(
                $fileName = $_FILES['myfile']['name'];
                $fileSize = $_FILES['myfile']['size'];
                $fileTmpName = $_FILES['myfile']['tmp_name'];
                $fileType = $_FILES['myfile']['type'];
                if($fileName != "" && (
                    $fileType == 'image/png' || $fileType == 'image/jpeg' ||
                    $fileType == 'image/PNG' || $fileType == 'image/JPEG')
                ){
                    $uploadPath = $currentDir . $uploadDir . $fileName;
                    // echo "<br>".$currentDir;
                    // echo "<br>".$uploadDir;
                    // echo "<br>".$fileName;
                    // echo "<br>".$fileTmpName;
                    // echo "<br>".$uploadPath."<br>";
                    if(move_uploaded_file($fileTmpName, $uploadPath)){
                        echo "<br>Załadowano zdjęcie na serwer FTP<br><br>";
                        echo "<img src='fotka.png' alt='Niespodziankowa fotka'>";
                        // echo "<img src='\\fotki\\fotka.png' alt='Niespodziankowa fotka'>"; //NIE DZIAŁA.... :(
                        // echo "<img src='/fotki/fotka.png' alt='Niespodziankowa fotka'>"; //NIE DZIAŁA.... :(
                    }else{
                        echo "<br>Nie udało się załadować pliku<br><br>";
                    }
                    
                }
            }
            
        ?>        
    </body>
</html>