<?php 
    class DeleteSkillController{

        function handle($pdo, $id){

            try {
                
                $sql="DELETE FROM skills WHERE `id`='$id'";

                $pdo->prepare($sql)->execute();

                echo json_encode(array(1));

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }
    }

?>