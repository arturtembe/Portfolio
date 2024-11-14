<?php 
    // Cors
    include_once '../src/inc/cors.inc';
    // db
    include_once '../src/inc/connect.php';
    // Path
    $path = '../src/docs/projects.json';
    
    // Controller
    include_once '../src/controllers/project/view.project.controller.php';

    $controller = new ViewProjectController;
    $controller->execute($pdo, $path);

?>