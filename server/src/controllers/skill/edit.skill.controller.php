<?php 
    class EditSkillController{

        function handle($pdo, $data){

            try {
                
                $sql="UPDATE skills SET tecnologia=:tecnologia,
                        slug=:slug, destaque=:destaque WHERE id=:id";

                $pdo->prepare($sql)->execute($data);

                echo json_encode(array(1));

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }
    }

?>