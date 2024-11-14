import { Link } from 'react-router-dom';
import '../../../../styles/Home/Main/inicio/_style.scss';
import { Github, Linkedin } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import ScrollrevealHelper from '../../../../helpers/scrollreveal.helper';

const scroll_reaveal = new ScrollrevealHelper().homeReveal();

export default function InicioHomePage(){
    //import.meta.env.VITE_URL_DATABASE
    const inicioHomeRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        if(inicioHomeRef.current){
            ScrollReveal().reveal(inicioHomeRef.current, scroll_reaveal.inicioHome);
        }
    }, []);

    return(
        <section id='inicioHomePage' className='sectionHomePage'>
            <div className='home__container' ref={inicioHomeRef}>
                <h1 className='home__title'>
                    Ola, Eu sou
                    <span> {' '}
                        <ReactTyped 
                            strings={[
                                "Artur Tembe",
                                "Desenvolvedor Jr. Frontend",
                                "Desenvolvedor Jr. Backend",
                                "Desenvolvedor Jr. Full-Stack"
                            ]}
                            typeSpeed={30}
                            backSpeed={50}
                            // loop
                            loop
                        />
                    </span>
                </h1>
                <p className="home__description">
                    Sou um desenvolvedor apaixonado pelo que eu faço.
                    Por isso estou sempre querendo aprender algo novo 
                    que me ajude a ser um desenvolvedor cada vez melhor.
                </p>
                <p className="home__description">
                    Tenho experiencia em criar interfaces de 
                    usuario ricas, intuitivas, responsivas e modernas usando
                    <Link to={`/habilidade/html`}> HTML</Link>, 
                    <Link to={`/habilidade/css`}> CSS</Link>, 
                    <Link to={`/habilidade/javascript`}> JAVASCRIPT</Link>, 
                    <Link to={`/habilidade/typescript`}> TYPESCRIPT</Link>, 
                    <Link to={`/habilidade/react`}> REACT</Link>, 
                    <Link to={`/habilidade/next`}> NEXT</Link>, 
                    <Link to={`/habilidade/node`}> NODE</Link>, 
                    <Link to={`/habilidade/php`}> PHP</Link>, 
                    <Link to={`/habilidade/vue`}> VUE</Link>, 
                    <Link to={`/habilidade/angular`}> ANGULAR</Link>, 
                    <Link to={`/habilidade/laravel`}> LARAVEL</Link>, 
                    <Link to={`/habilidade/react-native`}> React Native</Link>, 
                    <Link to={`/habilidade/java`}> JAVA </Link>, 
                    e actualmente estou estudando FLUTTER, SPRING BOOT.
                </p>
                {/* GITHub, LINKED */}
                <div className="home__buttons">
                    <Link to="https://github.com/arturtembe/">
                        <Github size={20} className='home__icon' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/artur-jaime-tembe-770a71216/">
                        <Linkedin size={20} className='home__icon' />
                    </Link>
                </div>
            </div>
        </section>
    )
}