<?php 
    class DeleteProjectsController{

        function handle($pdo, $data){

            try {
                $sql = "DELETE FROM projects WHERE id=:id";

                $pdo->prepare($sql)->execute($data);

                echo json_encode(array(1));

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }
    }

?>