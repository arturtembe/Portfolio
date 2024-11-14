import { useContext } from "react"
import ProjectoContext from "../../../../utils/pages/projecto.context.page"
import HeaderDetalhesProjecto from "./HeaderDetalhes";
import '../../../../styles/Projecto/slugProjectoMain/_style.scss';
import MainDetalhesProjecto from "./MainDetalhes";

export default function SlugProjectoMainPage(){
    const context = useContext(ProjectoContext);

    return(
        <main id='mainPage'>
            <section id="details_section">
                <div className="details_section_box">
                    
                    {/* HEADER */} 
                    {
                        context.viewProjecto.length ===1 && (<HeaderDetalhesProjecto />)
                    }

                    {/* MAIN */}
                    {
                        context.viewProjecto.length === 1 && (
                            context.viewProjecto[0].descricao && (
                                <MainDetalhesProjecto />
                            )
                        )
                    }

                </div>
            </section>
        </main>
    )
}