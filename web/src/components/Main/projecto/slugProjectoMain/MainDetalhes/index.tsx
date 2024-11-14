import { useEffect, useRef } from 'react';
import '../../../../../styles/Projecto/slugProjectoMain/MainDetalhes/_style.scss';
import ScrollReveal from 'scrollreveal';
import ScrollrevealHelper from '../../../../../helpers/scrollreveal.helper';

const scroll_reaveal = new ScrollrevealHelper().homeReveal();
// const imageFormat = new ImageUtil();
// const textFormt = new TextUtil();

export default function MainDetalhesProjecto(){
    const detailMainHomeRef = useRef<HTMLAnchorElement>(null);
    
    useEffect(()=>{

        if(detailMainHomeRef.current){
            ScrollReveal().reveal(
                detailMainHomeRef.current, 
                scroll_reaveal.habilidade_card);
        }
        
    }, []);

    return(
        <div id="details_main">
            <header id='details_main_header'>
                <span className='active'>Gallery</span>
            </header>
            <main id='details_main_main'>
                
            </main>
        </div>
    )
}