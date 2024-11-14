<?php 
    
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // Controller
    include_once '../../src/controllers/contact/send.contact.controller.php';

    // Utils
    include_once '../../src/utils/valid.util.php';

    $data = array();
    $valid = new ValidUtils;
    $controller = new SendContactController;

    if($valid->emptyText($_POST['nome']) && $valid->emptyText($_POST['email']) 
        && $valid->emptyText($_POST['mensagem']))
    { 
        $data = [
            'nome' => $_POST["nome"],
            'email' => $_POST["email"],
            'mensagem' => $_POST["mensagem"]
        ]; 
        
        //echo json_encode($data);
        $controller->handle($pdo, $data);
    }
    else{
        echo json_encode($data);
    }

?>