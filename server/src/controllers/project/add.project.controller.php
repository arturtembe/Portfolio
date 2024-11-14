<?php 
    class AddProjectsController{

        function handle($pdo, $data){

            try {
                $sql="INSERT INTO projects 
                        (titulo, slug, tipo, tecnologia, imageUrl,
                        videoUrl, github, live, destaque, descricao) 
                    VALUES (:titulo, :slug, :tipo, :tecnologia, :imageUrl, 
                        :videoUrl, :github, :live, :destaque, :descricao)";

                $pdo->prepare($sql)->execute($data); 

                echo json_encode(array(1));

            } catch(PDOException $e) {
                die("Connection failed: " . $e->getMessage());
            }
        }
    }

?>