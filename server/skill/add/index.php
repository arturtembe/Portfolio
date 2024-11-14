<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/skill/add.skill.controller.php';
    include_once '../../src/controllers/skill/view.skill.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new AddSkillController;
    $verify = new ViewSkillController;

    if(isset($_POST["tecnologia"]) && $_POST["tecnologia"]!="")
    { 
        $data = [ 
            'tecnologia' => $_POST["tecnologia"],
            'slug' => $valid-> removerSpecilaCharacter(strtolower($_POST["tecnologia"])),
            'destaque' => $valid-> verifyBoolean($_POST["destaque"]),
        ];
        
        //$verify->executeTecnologia($pdo, $_POST["tecnologia"]);
        
        if(count($verify->executeTecnologia($pdo, $_POST["tecnologia"])) === 0)
        {
            //echo json_encode($data);
            $controller->handle($data);
        }
        else{
            die('Ja existem esta skill no banco de dado!');
        }
    }
    else{
        echo json_encode($data);
    }

?>