<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/project/edit.project.controller.php';
    include_once '../../src/controllers/project/view.project.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new AditProjectsController;
    $view = new ViewProjectController;

    if($valid->emptyText($_POST["id"]))
    {  
        if(count($view->executeId($pdo, $_POST['id'])) === 1){

            $dataDB = $view->executeId($pdo, $_POST['id'])[0];

            $data = [ 
                'titulo' => $valid->emptyTextChenge($_POST["titulo"], $dataDB->titulo),
                // 'slug' => $valid-> numberHelper(),
                'tipo' => $valid->emptyTextChenge($_POST["tipo"], $dataDB->tipo),
                'tecnologia' => $valid->emptyTextChenge($_POST["tecnologia"], $dataDB->tecnologia),
                'imageUrl' => $valid->emptyTextChenge($_POST["imageUrl"], $dataDB->imageUrl),
                'videoUrl' => $valid->emptyTextChenge($_POST["videoUrl"], $dataDB->videoUrl),
                'github' => $valid->emptyTextChenge($_POST["github"], $dataDB->github),
                'live' => $valid->emptyTextChenge($_POST["live"], $dataDB->live),
                'destaque' => $valid-> emptyText($_POST["destaque"]) ? $valid-> verifyBoolean($_POST["destaque"]):$dataDB->destaque,
                'descricao' => $valid->emptyTextChenge($_POST["descricao"], $dataDB->descricao),
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