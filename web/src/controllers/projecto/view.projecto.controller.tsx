// import projectoDefaultHelper from "../../helpers/default/projecto.default.helper";
import { ProjectoInterface } from "../../interfaces/Projecto/projecto.interface";
import GetService from "../../services/get.service";

export default class ViewProjectoController{
    
    async execute(): Promise<ProjectoInterface[]>{
        const dado = await new GetService().handle("project") as ProjectoInterface[];
        // projectoDefaultHelper
        return dado.length > 0 ? dado:[]; 
    }
    async executeDestaque(): Promise<ProjectoInterface[]>{
        const dado = await new GetService().handle("project") as ProjectoInterface[];
        // projectoDefaultHelper
        return dado.filter(el=>el.destaque === true); 
    }
}