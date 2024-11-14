<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/comment/add.comment.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new AddCommentsController; 

    if($valid->emptyText($_POST["project_id"]) 
        && $valid->emptyText($_POST["name_user"])
        && $valid->emptyText($_POST["email_user"])
        && $valid->emptyText($_POST["comment"])
    )
    { 
        $data = [
            'name_user' => $_POST["name_user"],
            'email_user' => $_POST["email_user"],
            'comment' => $_POST["comment"],
            'project_id' => intval($_POST["project_id"])
        ];
        
        $count = $controller->handle($pdo, $data);
        
        if($count > 0) echo json_encode(array('msg'=>"Registado com sucesso!", 'error'=>""));
        else echo json_encode(array('msg'=>"", 'error'=>"Houve um erro ao registar"));
    
    }
    else{
        echo json_encode($data);
    }

?>