<?php 
    class ViewContactController{

        function execute($pdo){
            $data = array();

            try {

                $stmt = $pdo->query("select * from contacts ORDER BY updated_at DESC");
        
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->nome = $row['nome'];
                    $json->email = $row['email'];
                    $json->mensagem = $row['mensagem'];
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