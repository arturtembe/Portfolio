<?php 
    try {
        
        $pdo = new PDO(
            "mysql:host=localhost:3306;dbname=portfolio", 
            "root",
            "root"
        );
            
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch(PDOException $e) {
        die("Connection failed: " . $e->getMessage());
    }
?>