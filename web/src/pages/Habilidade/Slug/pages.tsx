import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Main from '../../../components/Main/projecto';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProjectoInterface } from '../../../interfaces/Projecto/projecto.interface';
import ProjectoContext from '../../../utils/pages/projecto.context.page';
import ViewProjectoController from '../../../controllers/projecto/view.projecto.controller';
import Footer from '../../../components/Footer';

export function HabilidadeSlug(){
    const [viewProjecto, setViewProjecto] = useState<ProjectoInterface[]>([]);
    // document.title = "Projecto";
    const [searchParams,setSearchParams] = useSearchParams();
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [ceil, setCeil] = useState<number>(10);
    const limitX = 24;
    const {slug} = useParams(); 

    useEffect(()=>{
        
        let viewSlug = "";

        if(slug) {
            viewSlug = slug;
            document.title = viewSlug.toUpperCase();
        }

        const view = async()=>{
            let proj:ProjectoInterface[] = [];
            const viewData = (await new ViewProjectoController().execute())
                            .filter(el=>el.tecnologia.toLowerCase().indexOf(viewSlug.toLowerCase()) > -1);
            
            setSearch(viewSlug.toUpperCase());
            
            setCeil(Math.ceil(viewData.length/limitX));
            let inicio = 0;
            let final = limitX;

            if(searchParams.get('p')){
                if(!isNaN(Number(`${searchParams.get('p')}`))){
                    inicio = Number(`${searchParams.get('p')}`) === 1 ? 0 : (Number(`${searchParams.get('p')}`)-1)*limitX; 
                    final = Number(`${searchParams.get('p')}`) === 1 ? limitX : ((Number(`${searchParams.get('p')}`)-1)*limitX)+limitX; 
                
                    setPage(Number(`${searchParams.get('p')}`));
                }
            }

            if(searchParams.get('search')){
                const projSearch = viewData.filter(el=>el.titulo.toLowerCase().indexOf(`${searchParams.get('search')?.toLowerCase()}`) > -1);
                
                proj = projSearch.slice(inicio,final);
                setCeil(Math.ceil(projSearch.length/limitX));

                setSearch(`${searchParams.get('search')}`);
                
                setSearchParams(params=>{
                    return params;
                })
            }
            else{
                proj = viewData.slice(inicio,final);
            }

            setViewProjecto(proj);
        }
        view();
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