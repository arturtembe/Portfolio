import { useEffect, useRef } from 'react';
import '../../../../styles/templates/HeaderTitlePage/_style.scss';
import ScrollReveal from 'scrollreveal';
import SearchHeaderPage from './search';

export default function HeaderTitlePage(
    {title = "Habilidade", search }:
    {
        title?: string,
        search?: "habilidade"|"projecto"|"contacto"
    }){
    const h1TitleRef = useRef<HTMLHeadingElement>(null); 
    
    useEffect(()=>{
        if(h1TitleRef.current){
            ScrollReveal().reveal(h1TitleRef.current, 
                {
                    origin:'left',
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
        <header id="headerTitlePage">
            <h1 ref={h1TitleRef}>{title}</h1>
            <SearchHeaderPage action={search} />
        </header>
    )
}