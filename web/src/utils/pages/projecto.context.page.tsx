'use client';
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { ProjectoInterface } from "../../interfaces/Projecto/projecto.interface";

type ProjectoContextType = {
    // Projecto
    viewProjecto: ProjectoInterface[]; 
    setViewProjecto: Dispatch<SetStateAction<ProjectoInterface[]>>;
    search:string;
    setSearch: Dispatch<SetStateAction<string>>;
    ceil: number;
    setCeil: Dispatch<SetStateAction<number>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

const ProjectoContext = createContext<ProjectoContextType>({
    viewProjecto: [],
    setViewProjecto: ()=>{},
    search: "",
    setSearch: ()=>{},
    ceil: 0,
    setCeil: ()=>{},
    page: 1,
    setPage: ()=>{}
});
export default ProjectoContext;
