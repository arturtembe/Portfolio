import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main/home';
import HomeContext from '../../utils/pages/home.context.page';
import ViewHabilidadeController from '../../controllers/habilidade/view.habilidade.controller';
import { HabilidadeInterface } from '../../interfaces/Habilidade/habilidade.interface';
import { ProjectoInterface } from '../../interfaces/Projecto/projecto.interface';
import ViewProjectoController from '../../controllers/projecto/view.projecto.controller';
import Footer from '../../components/Footer';

export function Home(){
    const [viewHabilidade, setViewHabilidade] = useState<HabilidadeInterface[]>([]);
    const [viewProjecto, setViewProjecto] = useState<ProjectoInterface[]>([]);

    useEffect(()=>{
        const viewHabilidade = async()=>{
            const habil = await new ViewHabilidadeController().executeDestaque();
            setViewHabilidade(habil);
        }
        const viewProjecto = async()=>{
            const proj = await new ViewProjectoController().executeDestaque();
            setViewProjecto(proj);
        }
        
        viewHabilidade();
        viewProjecto();

    }, []);

    return (   
        <HomeContext.Provider value={{ 
            viewHabilidade, setViewHabilidade,
            viewProjecto, setViewProjecto
        }}>
            <Header />
            <Main />
            <Footer />
        </HomeContext.Provider>
    )
}