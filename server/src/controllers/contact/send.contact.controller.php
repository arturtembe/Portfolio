<?php 
    class SendContactController{

        function handle($pdo, $data){
            $data = array();

            try { 
                $sql="INSERT INTO contacts (nome, email, mensagem) 
                    VALUES (:nome, :email, :mensagem)";

                $pdo->prepare($sql)->execute($data); 

                $data[] = 1;

            } catch(PDOException $e) {
                //die("Connection failed: " . $e->getMessage());
                return array();
            }

            return $data;
        }
    }

?>