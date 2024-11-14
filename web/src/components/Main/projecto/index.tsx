import { useContext } from 'react';
import HeaderTitlePage from '../templates/headerTitlePage';
import ProjectoContext from '../../../utils/pages/projecto.context.page';
import ProjectoMain from './projectoMain';
import PaginationPage from '../templates/paginationPage';
import NotFoundMaindPage from '../templates/notFoundMainPage';

export default function ProjectoMainPage(){
    const context = useContext(ProjectoContext);

    return(
        <main id='mainPage'>
            <HeaderTitlePage 
                title={ context.search ? `Search: ${context.search}`:'projecto' }
                search='projecto'
            /> 
            {
                context.viewProjecto.length> 0 ? (
                    <ProjectoMain data={context.viewProjecto} />
                ):(
                    <NotFoundMaindPage />
                )
            }

            <PaginationPage page={context.page} search={context.search} length={context.ceil} title='projecto' />
        </main>
    )
}