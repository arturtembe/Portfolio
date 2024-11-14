<?php 
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // SQL to create table
    
    $sql = "CREATE TABLE projects (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        tipo VARCHAR(50) NOT NULL,
        tecnologia VARCHAR(1000) NOT NULL,
        imageUrl VARCHAR(1000) NOT NULL,
        videoUrl VARCHAR(1000) NOT NULL,
        github VARCHAR(1000) NOT NULL,
        live VARCHAR(1000) NOT NULL,
        destaque BOOLEAN NOT NULL,
        descricao VARCHAR(5000) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    try {
        $pdo ->exec($sql);
        echo "Table 'projects' created successfully";
    } catch(PDOException $e) {
        echo "Error creating table: " . $e->getMessage();
    }
    
?>