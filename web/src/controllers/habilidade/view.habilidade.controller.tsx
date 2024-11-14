// import habilidadeDefaultHelper from "../../helpers/default/habilidade.default.helper";
import { HabilidadeInterface } from "../../interfaces/Habilidade/habilidade.interface";
import GetService from "../../services/get.service";

export default class ViewHabilidadeController{

    async execute(): Promise<HabilidadeInterface[]>{
        const dado = await new GetService().handle("skill") as HabilidadeInterface[];
        //habilidadeDefaultHelper
        return dado.length > 0 ? dado: []; 
        //return [];
    }
    async executeDestaque(): Promise<HabilidadeInterface[]>{
        const dado = await new GetService().handle("skill") as HabilidadeInterface[];
        // habilidadeDefaultHelper
        return dado.filter(el=>el.destaque === true); 
    }
}