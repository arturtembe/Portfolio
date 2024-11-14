import ContactoMain from "../templates/contactoMain";
import HeaderTitleHome from "../templates/headerTitleHome";

export default function ContactoMainPage(){
    
    return(
        <main id='mainPage'> 
            <HeaderTitleHome title="Contacto"/>
            <ContactoMain /> 
        </main>
    )
}