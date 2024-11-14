import { Link } from 'react-router-dom';
import '@/styles/templates/HabilidadeMain/card/_style.scss';
import ScrollrevealHelper from '../../../../../helpers/scrollreveal.helper';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { HabilidadeInterface } from '../../../../../interfaces/Habilidade/habilidade.interface';

const scroll_reaveal = new ScrollrevealHelper().homeReveal();

export default function CardHabilidade({data}:{data: HabilidadeInterface}){
    const cardHabilRef = useRef<HTMLAnchorElement>(null);
    const endpoint = "/image/habilidade";

    useEffect(()=>{
        if(cardHabilRef.current){
            ScrollReveal().reveal(cardHabilRef.current, scroll_reaveal.habilidade_card);
        }
    }, []); 
    return (
            <Link to={`/habilidade/${data.slug}`} id="habilidade__card" ref={cardHabilRef}>
        
            <img 
                src={`${endpoint}/${data.slug}.svg`}
                alt={data.tecnologia} 
                className="habilidade__img"
                loading="lazy" 
            /> 

            <h2 className="habilidade__title">{data.tecnologia}</h2>

        </Link>
    )
}