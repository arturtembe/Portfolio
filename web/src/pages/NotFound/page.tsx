import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main/templates/notFoundMainPage";
import ContactoContext from "../../utils/pages/contacto.context.page";

export function NotFound(){
    document.title = "404";
    return (   
        <ContactoContext.Provider value={{ }}>
            <Header position='404' />
            <Main className="fullPage"/>
            <Footer />
        </ContactoContext.Provider>
    )
}