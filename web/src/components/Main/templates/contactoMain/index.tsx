import { FormEvent, useEffect, useRef, useState } from 'react';
import '../../../../styles/templates/ContactoMain/_style.scss';
import ScrollReveal from 'scrollreveal';
import ScrollrevealHelper from '../../../../helpers/scrollreveal.helper';
//import SendContactoController from '../../../../controllers/contacto/send.contacto.controller';
import ValidUtil from '../../../../utils/valid.util';
import emailJs from '@emailjs/browser';

const scroll_reaveal = new ScrollrevealHelper().homeReveal().contacto_home;
const valid = new ValidUtil();

export default function ContactoMain(){
    const sectionRef_findme = useRef(null);
    const sectionRef_form = useRef<HTMLFormElement>(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMessage] = useState("");
    const [msgError, setMsgError] = useState("");
    const [msgErrorTipo, setMsgErrorTipo] = useState("");

    useEffect(()=>{
        // Init Email
        // emailJs.init();

        if(sectionRef_findme.current)
            ScrollReveal().reveal(
                sectionRef_findme.current,
                scroll_reaveal.findme);
        
        if(sectionRef_form.current)
            ScrollReveal().reveal(
                sectionRef_form.current,
                scroll_reaveal.contact);
        //listhab();
    }, []);

    const senderMessage = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        // Validar Nome
        if(!nome) {
            setMsgErrorTipo("error");
            setMsgError(`O campo nome não deve estar vazia`); 
            return;
        }
        
        // Validar Email
        if(!email) {
            setMsgErrorTipo("error");
            setMsgError(`O campo email não deve estar vazia`); 
            return;
        }

        // Validar Message
        if(!mensagem) {
            setMsgErrorTipo("error");
            setMsgError(`O campo message não deve estar vazia`); 
            return;
        } 
        
        // Sender 
        if(nome && email && mensagem){

            if(!valid.isEmailValid(email)) {
                setMsgErrorTipo("error");
                setMsgError(`Email Invalid!`); 
                return;
            }
            
            //const data = { nome, email, mensagem}
            //const send = await new SendContactoController().handle(data, `${sectionRef_form.current?.target}`);
            if(!sectionRef_form.current) return;

            await emailJs.sendForm(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                sectionRef_form.current,
                import.meta.env.VITE_MAIL_PUBLIC_KEY
            )
            .then(res=>{
                if(res.text){
                    //console.log(res);
                    setMsgError("Enviado com sucesso!");
                    setMsgErrorTipo("sucess");
                    
                    // Limpar
                    setNome("");
                    setEmail("");
                    setMessage("");

                    return;
                }
            }).catch(error=>{
                console.log(error)
                
                setMsgErrorTipo("error");
                setMsgError("Houve um erro ao enviado, porfavor volte a tentar!");
            })
            
        }

    }
    return (
        <main id="mainContacto"> 
            
            <section className="contact_findme" ref={sectionRef_findme}>
                <h4>Find Me</h4>
                <p>Email: turazdev@gmail.com</p>
                <p>Tel: +258 86 259 5036</p>
            </section>
                
            <section className="contact_form">
                <form className="form" 
                    id="contactForm" 
                    ref={sectionRef_form} 
                    onSubmit={(e)=>senderMessage(e)}>
                        
                        {
                            msgError && (
                                <div className="form_box_input hidden">
                                    <span className={`msg ${msgErrorTipo}`} id="msg">
                                        {msgError}
                                    </span>
                                </div>
                            )
                        }

                        <div className="form_box_input">
                            <label>Nome</label>
                            <input type="text" name="user_name" id="user_name" placeholder="Nome" 
                                onChange={(e)=>setNome(e.target.value)} value={nome}/>
                        </div>


                    <div className="form_box_input">
                        <label>Email</label>
                        <input type="email" name="user_email" id="user_email" placeholder="Email"
                            onChange={(e)=>setEmail(e.target.value.toLowerCase())} value={email}/>
                    </div>
                            
                    <div className="form_box_input">
                        <label>Conteudo</label>
                        <textarea placeholder="Messagem" name="message" id="message"
                            onChange={(e)=>setMessage(e.target.value)} value={mensagem}>
                        </textarea>
                    </div>

                    <div className="form_box_input">
                        <button type="submit">Enviar</button>
                        <button type="reset" id="reset" className="active">Limpar</button>
                    </div>

                    </form>
            </section>

        </main>
    )
}