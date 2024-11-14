<?php 
    // Cors
    include_once './src/inc/cors.inc';

    $json = new stdClass;
    $json->authors = array(['name'=>'Turazdev']);
    $json->creator = 'Artur Jaime Tembe';
    $json->email = "turazdev@gmail.com";
    $json->description = "";

    echo json_encode($json);
?>