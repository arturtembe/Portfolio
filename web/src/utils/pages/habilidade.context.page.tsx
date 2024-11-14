'use client';
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { HabilidadeInterface } from "../../interfaces/Habilidade/habilidade.interface";

type HabilidadeContextType = {
    viewHabilidade: HabilidadeInterface[]; 
    setViewHabilidade: Dispatch<SetStateAction<HabilidadeInterface[]>>;
    search:string;
    setSearch: Dispatch<SetStateAction<string>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    ceil: number;
    setCeil: Dispatch<SetStateAction<number>>;
}

const HabilidadeContext = createContext<HabilidadeContextType>({
    viewHabilidade: [],
    search: "",
    setSearch: ()=>{},
    setViewHabilidade: ()=>{},
    page: 1,
    setPage: ()=>{},
    ceil: 0,
    setCeil: ()=>{}
});
export default HabilidadeContext;
