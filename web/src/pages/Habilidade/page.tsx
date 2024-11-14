import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main/habilidade';
import ViewHabilidadeController from '../../controllers/habilidade/view.habilidade.controller';
import { HabilidadeInterface } from '../../interfaces/Habilidade/habilidade.interface';
import HabilidadeContext from '../../utils/pages/habilidade.context.page';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';

export function Habilidade(){
    const [viewHabilidade, setViewHabilidade] = useState<HabilidadeInterface[]>([]);
    document.title = "Habilidade";
    const [searchParams,setSearchParams] = useSearchParams();
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [ceil, setCeil] = useState<number>(10);
    const limitX = 24; 

    useEffect(()=>{
        const view = async()=>{
            let habil:HabilidadeInterface[] = [];
            const viewData = await new ViewHabilidadeController().execute();
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
                
                const habilSearch = viewData
                        .filter(el=>el.tecnologia.toLowerCase().indexOf(`${searchParams.get('search')?.toLowerCase()}`) > -1);

                habil = habilSearch.slice(inicio,final);
                setCeil(Math.ceil(habilSearch.length/limitX));
                
                setSearch(`${searchParams.get('search')}`);

                setSearchParams(params=>{
                    return params;
                })
            }
            else{
                habil = viewData.slice(inicio,final);
            }

            setViewHabilidade(habil);
        }
        view();
    }, []); 

    return (   
        <HabilidadeContext.Provider value={{ 
            viewHabilidade, setViewHabilidade,
            search, setSearch,
            page, setPage,
            ceil, setCeil
        }}>
            <Header position='habilidade' />
            <Main />
            <Footer />
        </HabilidadeContext.Provider>
    )
}