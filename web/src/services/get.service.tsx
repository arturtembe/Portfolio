import axios from "axios";

export default class GetService{

    async handle(endpoint: "skill"|"project"|"comment"){
        return await axios.get(
            `${import.meta.env.VITE_URL_DATABASE}/${endpoint}`)
            .then(res=>{
                //console.log(res.data);
                return res.data;
            })
            .catch(error=>{
                console.log(error);
                return [];
            });
    } 
}