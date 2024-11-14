<?php 
    // Cors
    //include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // SQL to create table
    $sql = "CREATE TABLE comments (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name_user VARCHAR(255) NOT NULL,
        email_user VARCHAR(200) NOT NULL,
        comment VARCHAR(1000) NOT NULL,
        project_id INT(6), 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    try {
        $pdo ->exec($sql);
        echo "Table 'comments' created successfully";
    } catch(PDOException $e) {
        echo "Error creating table: " . $e->getMessage();
    }
?>