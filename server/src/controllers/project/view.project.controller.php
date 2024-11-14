<?php 
    class ViewProjectController{

        function execute($pdo, $path){
            try {

                $stmt = $pdo->query("select * from projects ORDER BY updated_at DESC");
        
                //fetchAll(PDO::FETCH_ASSOC)
                $data = array();
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->titulo = $row['titulo'];
                    $json->slug = $row['slug'];
                    $json->tipo = $row['tipo'];
                    $json->tecnologia = $row['tecnologia'];
                    $json->imageUrl = $row['imageUrl'];
                    $json->videoUrl = $row['videoUrl'];
                    $json->github = $row['github'];
                    $json->live = $row['live'];
                    $json->destaque = $row['destaque'] === 1 ? true:false;
                    $json->descricao = $row['descricao'];
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
    
                $stmt = $pdo->query(" SELECT * FROM projects WHERE tecnologia='$tecnologia' ORDER BY id DESC");
                // $stmt->execute(["tecnologia"=>$tecnologia]);
        
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->titulo = $row['titulo'];
                    $json->slug = $row['slug'];
                    $json->tipo = $row['tipo'];
                    $json->tecnologia = $row['tecnologia'];
                    $json->imageUrl = $row['imageUrl'];
                    $json->videoUrl = $row['videoUrl'];
                    $json->github = $row['github'];
                    $json->live = $row['live'];
                    $json->destaque = $row['destaque'] === 1 ? true:false;
                    $json->descricao = $row['descricao'];
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
    
                $stmt = $pdo->query(" SELECT * FROM projects WHERE id='$id' ORDER BY updated_at DESC");
                // $stmt->execute(["tecnologia"=>$tecnologia]);
        
                while($row = $stmt->fetch()){
                    $json = new stdClass;
                    $json->id = $row['id'];
                    $json->titulo = $row['titulo'];
                    $json->slug = $row['slug'];
                    $json->tipo = $row['tipo'];
                    $json->tecnologia = $row['tecnologia'];
                    $json->imageUrl = $row['imageUrl'];
                    $json->videoUrl = $row['videoUrl'];
                    $json->github = $row['github'];
                    $json->live = $row['live'];
                    $json->destaque = $row['destaque'];
                    $json->descricao = $row['descricao'];
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