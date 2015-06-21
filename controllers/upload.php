<?php
$newImageSubmitted = isset( $_POST['new-image'] );
if ( $newImageSubmitted ) {
    $output = upload();
} else {
    $output = include_once "views/upload-form.php";
}
return $output;
function upload(){
    include_once "models/Uploader.class.php";

    //image-data is the name attribute used in <input type='file' />
    $uploader = new Uploader( "image-data" );
    $uploader->saveIn("img");
    $fileUploaded = $uploader->save();
    if ( $fileUploaded ) {
        $out = "new file uploaded";
    } else {
        $out = "something went wrong";
    }
    return $out;
}