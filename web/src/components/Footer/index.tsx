import { useEffect, useRef } from 'react';
import '../../styles/Footer/_style.scss';
import ScrollReveal from 'scrollreveal';
import ScrollrevealHelper from '../../helpers/scrollreveal.helper';

const scroll_reaveal = new ScrollrevealHelper().homeReveal();
export default function Footer(){
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

        if(sectionRef.current)
            ScrollReveal().reveal(
                sectionRef.current,
                scroll_reaveal.footer_home);
    }, []);

    return ( 
        <footer id="footerPage" className="footer_Home">
            <div className="footer__container_Home container grid" ref={sectionRef}>
                
                <span className="footer__copy_Home">&#169; All Rights Reserved By Turazdev</span>

            </div>
        </footer>
    )
}