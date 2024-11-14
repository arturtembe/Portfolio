<?php 
    // Cors
    //include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // SQL to create table
    $sql = "CREATE TABLE skills (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        tecnologia VARCHAR(50) NOT NULL,
        slug VARCHAR(60) NOT NULL,
        destaque BOOLEAN NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    try {
        $pdo ->exec($sql);
        echo "Table 'skills' created successfully";
    } catch(PDOException $e) {
        echo "Error creating table: " . $e->getMessage();
    }
?>