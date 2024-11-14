<?php 
    class AddSkillController{

        function handle($data){

            try {
                    
                $pdo = new PDO(
                    "mysql:host=localhost:3306;dbname=portfolio", 
                    "root",
                    "root"
                );
                
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $sql="INSERT INTO skills (tecnologia, slug, destaque) 
                        VALUES (:tecnologia, :slug, :destaque)";

                $pdo->prepare($sql)->execute($data);

                echo json_encode(array(1));

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }
    }

?>