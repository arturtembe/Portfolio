import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Main from '../../../components/Main/projecto/slugProjectoMain';
import ProjectoContext from '../../../utils/pages/projecto.context.page';;
import Footer from '../../../components/Footer';
import { useParams } from 'react-router-dom';
import { ProjectoInterface } from '../../../interfaces/Projecto/projecto.interface';
import ViewProjectoController from '../../../controllers/projecto/view.projecto.controller';

export function ProjectoSlug(){
    const [viewProjecto, setViewProjecto] = useState<ProjectoInterface[]>([]);
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [ceil, setCeil] = useState<number>(0);
    const {slug} = useParams();

    useEffect(()=>{
        if(slug){
            const view = async()=>{
                //let proj:ProjectoInterface[] = [];
                const viewData = (await new ViewProjectoController().execute())
                                .filter(el=>el.slug === slug);
                if(viewData.length === 1){
                    setViewProjecto(viewData);
                    document.title = viewData[0].titulo;
                }
                // console.log({slug});
            }
            view();
        }
    }, []);

    return (   
        <ProjectoContext.Provider value={{ 
            viewProjecto, setViewProjecto,
            search, setSearch,
            page, setPage,
            ceil, setCeil
        }}>
            <Header position='projecto' />
            <Main />
            <Footer />
        </ProjectoContext.Provider>
    )
}