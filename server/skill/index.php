<?php 
    // Cors
    include_once '../src/inc/cors.inc';
    // db
    include_once '../src/inc/connect.php';
    // Path
    $path = '../src/docs/skills.json';
    
    // Controller
    include_once '../src/controllers/skill/view.skill.controller.php';

    $controller = new ViewSkillController;
    $controller->execute($pdo, $path);

?>