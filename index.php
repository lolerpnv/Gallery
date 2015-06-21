<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
include_once "models/Page_Data.class.php";
$pageData = new Page_Data();
$pageData->addScript("js/lightbox.js");
$pageData->title = "Gallery";
$pageData->content = include_once "views/navigation.php";
$pageData->addCSS('css/layout.css');
$pageData->addCSS('css/navigation.css');

//database credentials
$dbInfo = "mysql:host=localhost;dbname=playground";
$dbUser = "root";
$dbPassword = "";

try {
    //try to create a database connection with a PDO object
    $db = new PDO( $dbInfo, $dbUser, $dbPassword );
    $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
//    $pageData->content = "<h1>We're connected</h1>";
}catch ( Exception $e ) {
    $pageData->content = "<h1>Connection failed!</h1><p>$e</p>";
}

$userClicked = isset($_GET['page']);
$isPollSubmitted = isset( $_POST['user-input'] );
if($userClicked) {
    $fileToLoad = $_GET['page'];
} else if(!$isPollSubmitted){
    $fileToLoad = "gallery";
}else $fileToLoad = "poll";
$pageData->content .= include_once "controllers/$fileToLoad.php";
$page = include_once "views/page.php";

echo $page;