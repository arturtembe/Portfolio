<?php 
    // Cors
    include_once '../../src/inc/cors.inc';
    // db
    include_once '../../src/inc/connect.php';

    // SQL to create table
    $sql = "DROP TABLE IF EXISTS projects";
    
    try {
        $pdo ->exec($sql);
        echo "Table dropped successfully.";
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
?>