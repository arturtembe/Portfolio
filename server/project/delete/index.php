<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/project/delete.project.controller.php';
    include_once '../../src/controllers/project/view.project.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new DeleteProjectsController;
    $view = new ViewProjectController;

    if($valid->emptyText($_POST["id"]))
    {  
        if(count($view->executeId($pdo, $_POST['id'])) === 1){
            $data = [
                'id' => $_POST["id"],
            ];
            $controller->handle($pdo, $data);
        }
        else{
            die('O Id invalido!');
        }
    }
    else{
        // echo json_encode($data);
        die('Porfavor preencha o campo Id!');
    }

?>