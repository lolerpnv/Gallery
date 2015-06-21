<?php
return "
<p>Upload new jpg images</p>
<form method='post' action='index.php?page=upload' enctype='multipart/form-data' >
    <label>Find a jpg image to upload</label>
    <input type='file' name='image-data' accept='image/jpeg'/>
    <input type='submit' value='Upload' name='new-image' />
 </form>";