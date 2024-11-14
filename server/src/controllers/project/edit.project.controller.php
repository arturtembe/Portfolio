<?php 
    class AditProjectsController{

        function handle($pdo, $data){

            try {
                $sql = "UPDATE projects SET titulo=:titulo, tipo=:tipo, 
                                tecnologia=:tecnologia, imageUrl=:imageUrl,
                            videoUrl=:videoUrl, github=:github, live=:live, 
                            destaque=:destaque, descricao=:descricao WHERE id=:id";

                $pdo->prepare($sql)->execute($data);

                echo json_encode(array(1));

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }
    }

?>