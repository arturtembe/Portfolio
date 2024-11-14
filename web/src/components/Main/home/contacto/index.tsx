import HeaderTitleHome from "../../templates/headerTitleHome";
import '../../../../styles/Home/Main/habilidade/_style.scss';
import ContactoMain from "../../templates/contactoMain";

export default function ContactoHomePage(){
    
    return (  
        <section id='contactoHomePage' className='sectionHomePage'>
            <div id="habil_container">
                <HeaderTitleHome title="Contacto"/>
                <ContactoMain />                
            </div>
        </section>
    )
}