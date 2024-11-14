<?php 
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // SQL to create table
    $sql = "CREATE TABLE contacts (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(200) NOT NULL,
        mensagem VARCHAR(1000) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    try {
        $pdo ->exec($sql);
        echo "Table 'contacts' created successfully";
    } catch(PDOException $e) {
        echo "Error creating table: " . $e->getMessage();
    }
?>