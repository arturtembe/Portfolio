<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/project/add.project.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new AddProjectsController;

    if(isset($_POST["titulo"]) && $_POST["titulo"]!="")
    { 
        $data = [
            'titulo' => $_POST["titulo"],
            'slug' => $valid-> numberHelper(),
            'tipo' => $_POST["tipo"],
            'tecnologia' => $_POST["tecnologia"],
            'imageUrl' => $_POST["imageUrl"],
            'videoUrl' => $_POST["videoUrl"],
            'github' => $_POST["github"],
            'live' => $_POST["live"],
            'destaque' => $valid-> verifyBoolean($_POST["destaque"]),
            'descricao' => $_POST["descricao"],
        ]; 
        
        //echo json_encode($data);
        $controller->handle($pdo, $data);
    }
    else{
        echo json_encode($data);
    }

?>