<?php 
    // Cors
    include_once '../src/inc/cors.inc';
    // db
    include_once '../src/inc/connect.php';
    
    // Controller
    include_once '../src/controllers/contact/view.contact.controller.php';

    $controller = new ViewContactController;
    $data = $controller->execute($pdo);

    echo json_encode($data);

?>