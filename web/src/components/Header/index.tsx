import { Link } from 'react-router-dom';
import '../../styles/templates/Header/_style.scss';
import LiLinkComponent from './Li/link.li.header';
import { AlignJustify, X } from 'lucide-react';
import { useRef } from 'react';
import { ListUlHeaderComponentInterface } from '../../interfaces/components/header/list.header.interface';

export default function HeaderComponent({ position = "inicio" }:ListUlHeaderComponentInterface){
    const headerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const openCloseMenu = ()=>{
        if(navRef.current && headerRef.current){
            navRef.current.classList.toggle('open-mobile-menu');
            headerRef.current.classList.toggle('headerPage');
        }
    }
    return (
        <header id='headerPage' className='headerPage' ref={headerRef}>
            <div className='logo'>
                <Link to={'/'}>Artur.</Link>
            </div>
            <nav ref={navRef}>
                <div className='close-list'>
                    <button onClick={openCloseMenu}>
                        <X color='#fff' size={24} />
                    </button>
                </div>
                <div className='list'>
                    <ul> 
                        <LiLinkComponent to='/' LinkValue='Inicio' className={position === "inicio" ? "active":""} />
                        <LiLinkComponent to='/habilidade' LinkValue='Habilidade' className={position === "habilidade" ? "active":""} />
                        <LiLinkComponent to='/projecto' LinkValue='Projecto'  className={position === "projecto" ? "active":""}/>
                        <LiLinkComponent to='/contacto' LinkValue='Contacto' className={position === "contacto" ? "active":""}/>
                    </ul>
                </div>
            </nav>

            <div className='language'>
            </div>

            <div className='menu-nav'>
                <button onClick={openCloseMenu}>
                    <AlignJustify color='#fff' size={24} />
                </button>
            </div>

        </header>
    )
}