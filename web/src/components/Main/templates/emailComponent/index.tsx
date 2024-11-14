import { Body, Head, Html, Preview, Text } from "@react-email/components";
import { ContactoInterface } from "../../../../interfaces/Contacto/contacto.interface";

export default function EmailComponent({dado}: {dado:ContactoInterface}){
    return (
        <Html lang="en">
            <Head />
            <Preview>{import.meta.env.VITE_USER_EMAIL_SUBJECT}</Preview>
            <Body style={main}>
                <Text style={text}>Name: {dado.nome}</Text>
                <Text style={text}>Email: {dado.email}</Text>
                <Text style={text}>Message:</Text>
                <Text style={text}>{dado.mensagem}</Text>
            </Body>
        </Html>
    )
}
const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0",
};
const text = {
    fontSize: "16px",
    fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px",
};