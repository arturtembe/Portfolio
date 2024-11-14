import { useContext } from 'react';
import '../../../styles/Home/Main/_style.scss';
import HabilidadeHomePage from './habilidade';
import InicioHomePage from './inicio';
import ProjectoHomePage from './projecto';
import HomeContext from '../../../utils/pages/home.context.page';
import ContactoHomePage from './contacto';

export default function HomeMain(){
    const context = useContext(HomeContext);

    return(
        <main id='mainPage'> 
            <InicioHomePage />
            {
                context.viewHabilidade.length > 0 && (
                    <HabilidadeHomePage />
                )
            }
            {
                context.viewProjecto.length >=4 && (
                    <ProjectoHomePage />
                )
            }
            <ContactoHomePage />
        </main>
    )
}