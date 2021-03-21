<?php

$nameErr = $kdrErr = $killsErr = $botsKillsErr = $deathsErr = $winsErr = $imgErr = "";
$name = $kdr = $kills = $botsKills = $deaths = $wins = $newName = "";

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["screenshot"]["name"]);
$newName = $target_dir . pathinfo($target_file,PATHINFO_FILENAME);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

echo "Name: " . htmlspecialchars($_POST['name']) . "</br>";
echo "KDR: " . (int)$_POST['kdr'] . "</br>";
echo "Kills: " . (int)$_POST['kills'] . "</br>";
echo "Bots Kills: " . (int)$_POST['botsKills'] . "</br>";
echo "Deaths: " . (int)$_POST['deaths'] . "</br>";
echo "Wins: " . (int)$_POST['wins'] . "</br>";

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["screenshot"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// Check if file already exists
$x = 1;

if(file_exists($newName.$x.".".$imageFileType)) {
    $x++;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if (move_uploaded_file($_FILES["screenshot"]["tmp_name"], $newName.$x.".".$imageFileType)) {
    echo "Thank you! Please allow 24 hours for your information to be updated.";
  }
?>