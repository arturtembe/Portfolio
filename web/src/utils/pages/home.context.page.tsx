'use client';
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { HabilidadeInterface } from "../../interfaces/Habilidade/habilidade.interface";
import { ProjectoInterface } from "../../interfaces/Projecto/projecto.interface";

type HomeContextType = {
    viewHabilidade: HabilidadeInterface[]; 
    setViewHabilidade: Dispatch<SetStateAction<HabilidadeInterface[]>>;
    // Projecto
    viewProjecto: ProjectoInterface[]; 
    setViewProjecto: Dispatch<SetStateAction<ProjectoInterface[]>>;
}

const HomeContext = createContext<HomeContextType>({
    viewHabilidade: [],
    setViewHabilidade: ()=>{},
    viewProjecto: [],
    setViewProjecto: ()=>{}
});
export default HomeContext;
