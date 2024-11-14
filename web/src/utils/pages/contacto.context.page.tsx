'use client';
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { ContactoInterface } from "../../interfaces/Contacto/contacto.interface";

type ContactoContextType = {
    viewContacto?: ContactoInterface; 
    setViewContacto?: Dispatch<SetStateAction<ContactoInterface>>;
}

const ContactoContext = createContext<ContactoContextType>({
    viewContacto: { email: '', mensagem: '', nome: ''},
    setViewContacto: ()=>{}
});
export default ContactoContext;
