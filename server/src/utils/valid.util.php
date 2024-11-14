<?php 
    class ValidUtils{

        function removerSpecilaCharacter($str){
            $str = preg_replace('/[áàãâä]/ui', 'a', $str);
            $str = preg_replace('/[éèêë]/ui', 'e', $str);
            $str = preg_replace('/[íìîï]/ui', 'i', $str);
            $str = preg_replace('/[óòõôö]/ui', 'o', $str);
            $str = preg_replace('/[úùûü]/ui', 'u', $str);
            $str = preg_replace('/[ç]/ui', 'c', $str);
            // $str = preg_replace('/[,(),;:|!"#$%&/=?~^><ªº-]/', '_', $str);
            $str = preg_replace('/[^a-z0-9]/i', '-', $str);
            $str = preg_replace('/_+/', '_', $str); // ideia do Bacco :)

            return $str;
        }

        function verifyBoolean($str){
            
            if($str){
                if(filter_var($str, FILTER_VALIDATE_BOOLEAN) === true)
                    return 1;
            }
            
            return 0; 
        }

        function numberHelper(){
            return date('d').''.date('m').''.date('Y').''.date('H').''.date('i').''.date('s'); 
        }
        
        function emptyText($str){
            return isset($str) && $str !=""; 
        }

        function emptyTextChenge($str, $dbStr){
            return (isset($str) && $str !="") ? $str: $dbStr; 
        }

    }

?>