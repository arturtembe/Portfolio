import { useEffect, useRef } from 'react';
import '../../../../styles/templates/HeaderTitleHome/_style.scss';
import ScrollReveal from 'scrollreveal';

export default function HeaderTitleHome({title = "Habilidade"}:{title?: "Habilidade"|"Projecto"|"Contacto"}){
    const headerTitleHomeRef = useRef<HTMLElement>(null);
    useEffect(()=>{
        if(headerTitleHomeRef.current){
            ScrollReveal().reveal(headerTitleHomeRef.current, 
                {
                    origin:'top',
                    distance:'60px',
                    duration:2500,
                    reset: false,
                    delay:1000,
                    // interval:100
                }
            );
        }
    }, []);
    return (
        <header id="headerTitleHome" ref={headerTitleHomeRef}>
            <h1>{title}</h1>
        </header>
    )
}