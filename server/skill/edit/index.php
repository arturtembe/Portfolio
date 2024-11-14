<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/skill/edit.skill.controller.php';
    include_once '../../src/controllers/skill/view.skill.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $valid = new ValidUtils;
    $controller = new EditSkillController; 
    $view = new ViewSkillController; 

    if(isset($_POST["id"]) && $_POST["id"]!="")
    {
        $dataDB = $view->executeId($pdo, $_POST['id']);
        
        if(count($dataDB) === 1){
            $data = [ 
                'tecnologia' => $valid->emptyTextChenge($_POST["tecnologia"], $dataDB[0]->tecnologia),
                'slug' => $valid-> emptyText($_POST["tecnologia"]) ? $valid-> removerSpecilaCharacter(strtolower($_POST["tecnologia"])):$dataDB[0]->slug,
                'destaque' => $valid-> emptyText($_POST["destaque"]) ? $valid-> verifyBoolean($_POST["destaque"]):$dataDB[0]->destaque,
                'id' => $_POST["id"],
            ];
            
            $controller->handle($pdo, $data);
        }
        else{
            die('O Id invalido!');
        }
    }
    else{
        die('Porfavor preencha o campo Id!');
    }

?>