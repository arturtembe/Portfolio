<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/skill/delete.skill.controller.php';
    include_once '../../src/controllers/skill/view.skill.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new DeleteSkillController;
    $view = new ViewSkillController;

    if($valid->emptyText($_POST["id"]))
    {  
        if(count($view->executeId($pdo, $_POST['id'])) === 1){
            $controller->handle($pdo, $_POST["id"]);
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