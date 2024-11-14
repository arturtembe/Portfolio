<?php 
    class AddCommentsController{

        function handle($pdo, $data){
            $dataRes = array();

            try {
                $sql="INSERT INTO comments (name_user, email_user, comment, project_id) 
                    VALUES (:name_user, :email_user, :comment, :project_id)";

                $pdo->prepare($sql)->execute($data); 

                //echo json_encode(array(1));
                $dataRes[] = array(1);

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
                return array();
            }

            return $dataRes;
        }
    }

?>