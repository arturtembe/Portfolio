import HabilidadeMain from "../../templates/habilidadeMain";
import HeaderTitleHome from "../../templates/headerTitleHome";
import '../../../../styles/Home/Main/habilidade/_style.scss';
import { useContext } from "react";
import HomeContext from "../../../../utils/pages/home.context.page";

export default function HabilidadeHomePage(){
    const context = useContext(HomeContext);

    return (  
        <section id='habilidadeHomePage' className='sectionHomePage'>
            <div id="habil_container">
                <HeaderTitleHome/>
                {
                    context.viewHabilidade.length> 0 && (
                        <HabilidadeMain data={context.viewHabilidade} />
                    )
                }
            </div>
        </section>
    )
}