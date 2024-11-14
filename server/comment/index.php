<?php 
    // Cors
    include_once '../src/inc/cors.inc';
    // db
    include_once '../src/inc/connect.php';
    
    // Controller
    include_once '../src/controllers/comment/view.comment.controller.php';

    $controller = new ViewCommentController;
    $data = $controller->execute($pdo);

    echo json_encode($data);

?>