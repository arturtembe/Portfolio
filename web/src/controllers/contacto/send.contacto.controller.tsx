// import EmailComponent from "../../components/Main/templates/emailComponent";
//import { transporterJobmoz as transporter } from "../../configs/nodemailer";
//import { ContactoInterface } from "../../interfaces/Contacto/contacto.interface";
// import { render } from '@react-email/components';
import emailJs from '@emailjs/browser';
// import { FormEvent } from "react";

export default class SendContactoController{

    async handle(target: string){
        try {
            /*
            const HtmlRender = await render(<EmailComponent dado={data} />);
            const options = {
                from: import.meta.env.VITE_USER_EMAIL_FROM,
                to: import.meta.env.VITE_USER_EMAIL_TO,
                subject: import.meta.env.VITE_USER_EMAIL_SUBJECT,
                html: HtmlRender,
            };
            */

            await emailJs.sendForm(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                target,
                import.meta.env.VITE_MAIL_PUBLIC_KEY
            )

            // console.log({data, options});
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    } 
}