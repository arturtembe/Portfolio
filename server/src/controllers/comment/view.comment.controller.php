<?php 
    class ViewCommentController{

        function execute($pdo){
            $data = array();

            try {

                $stmt = $pdo->query("select * from comments ORDER BY updated_at DESC");
        
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->name_user = $row['name_user'];
                    $json->email_user = $row['email_user'];
                    $json->comment = strlen($row['comment']) > 33 ? substr($row['comment'],0,30).'...':$row['comment'];
                    $json->project_id = $row['project_id'];
                    $json->created_at = $row['created_at'];
                    $json->updated_at = $row['updated_at'];
                    
                    $data[] = $json;
                }

            } catch(PDOException $e) {
                //die("Connection failed: " . $e->getMessage());
                return array();
            }
            return $data;
        }
    }

?>