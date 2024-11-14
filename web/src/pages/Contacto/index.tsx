import Header from '../../components/Header';
import Main from '../../components/Main/contacto';
import Footer from '../../components/Footer';
import ContactoContext from '../../utils/pages/contacto.context.page';

export function Contacto(){
    document.title = "Contacto";
    return (   
        <ContactoContext.Provider value={{ }}>
            <Header position='contacto' />
            <Main />
            <Footer />
        </ContactoContext.Provider>
    )
}