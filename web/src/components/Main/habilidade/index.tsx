import { useContext } from 'react';
import HabilidadeMain from '../templates/habilidadeMain';
import HabilidadeContext from '../../../utils/pages/habilidade.context.page';
import HeaderTitlePage from '../templates/headerTitlePage';
import PaginationPage from '../templates/paginationPage';
import NotFoundMaindPage from '../templates/notFoundMainPage';

export default function HabilidadeMainPage(){
    const context = useContext(HabilidadeContext);
    
    return( 
        <main id='mainPage'> 
            <HeaderTitlePage 
                title={ context.search ? `Search: ${context.search}`:'habilidade' }
                search='habilidade'
            />
            {
                context.viewHabilidade.length> 0 ? (
                    <HabilidadeMain data={context.viewHabilidade} />
                ):(
                    <NotFoundMaindPage />
                )
            }
            <PaginationPage page={context.page} search={context.search} length={context.ceil} />
        </main>
    )
}