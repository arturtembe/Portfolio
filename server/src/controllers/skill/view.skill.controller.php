<?php 
    class ViewSkillController{

        function execute($pdo, $path){
            try {

                $stmt = $pdo->query("select * from skills ORDER BY id DESC");//ASC
        
                //fetchAll(PDO::FETCH_ASSOC)
                $data = array();
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->tecnologia = $row['tecnologia'];
                    $json->slug = $row['slug'];
                    $json->destaque = $row['destaque'] === 1 ? true:false;
                    $json->created_at = $row['created_at'];
                    $json->updated_at = $row['updated_at'];
                    
                    $data[] = $json;
                }
                
                $jsonString = json_encode($data, JSON_PRETTY_PRINT);
                $fp = fopen($path, 'w');
                fwrite($fp, $jsonString);
                fclose($fp);
                
                echo $jsonString;
        
            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }

        function executeTecnologia($pdo, $tecnologia){
            $data = array();

            try {
    
                $stmt = $pdo->query(" SELECT * FROM skills WHERE tecnologia='$tecnologia' ORDER BY id DESC");
                // $stmt->execute(["tecnologia"=>$tecnologia]);
        
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->tecnologia = $row['tecnologia'];
                    $json->slug = $row['slug'];
                    $json->destaque = $row['destaque'] === 1 ? true:false;
                    $json->created_at = $row['created_at'];
                    $json->updated_at = $row['updated_at'];
                    
                    $data[] = $json;
                }
        
            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
                return array(-1);
            }

            return $data;
        }
        function executeId($pdo, $id){
            $data = array();

            try {
    
                $stmt = $pdo->query(" SELECT * FROM skills WHERE id='$id' ORDER BY id DESC");
                // $stmt->execute(["tecnologia"=>$tecnologia]);
        
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->tecnologia = $row['tecnologia'];
                    $json->slug = $row['slug'];
                    $json->destaque = $row['destaque'] === 1 ? true:false;
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