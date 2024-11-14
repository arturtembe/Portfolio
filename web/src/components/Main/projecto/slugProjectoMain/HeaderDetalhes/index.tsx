import { useContext, useEffect, useRef, useState } from 'react';
import '../../../../../styles/Projecto/slugProjectoMain/HeaderDetalhes/_style.scss';
import ProjectoContext from '../../../../../utils/pages/projecto.context.page';
import ImageUtil from '../../../../../utils/image.util';
import TextUtil from '../../../../../utils/text.util';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import ScrollrevealHelper from '../../../../../helpers/scrollreveal.helper';

const scroll_reaveal = new ScrollrevealHelper().homeReveal();
const imageFormat = new ImageUtil();
const textFormt = new TextUtil();

export default function HeaderDetalhesProjecto(){
    const context = useContext(ProjectoContext);
    const [url, setUrl] = useState<string>("");
    const [openGithub, setOpenGithub] = useState<boolean>(false);
    const [openLive, setOpenLive] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const imageHomeRef = useRef<HTMLAnchorElement>(null);
    const titleHomeRef = useRef<HTMLHeadingElement>(null);
    const tecnogiaHomeRef = useRef<HTMLAnchorElement>(null);
    
    useEffect(()=>{
        const viewUrl = async()=>{
            setUrl(
                await imageFormat.formatTextIcon(context.viewProjecto[0].imageUrl)
            )
        }
        viewUrl();

        if(context.viewProjecto[0].github) {
            setValue(context.viewProjecto[0].github);
            setOpenGithub(true);
        }
        else if(context.viewProjecto[0].live) {
            setValue(context.viewProjecto[0].live);
            setOpenLive(true);
        }

        if(imageHomeRef.current){
            ScrollReveal().reveal(
                imageHomeRef.current, 
                scroll_reaveal.contacto_home.findme);
        }
        if(titleHomeRef.current){
            ScrollReveal().reveal(
                titleHomeRef.current, 
                scroll_reaveal.contacto_home.contact);
        }

        if(tecnogiaHomeRef.current){
            ScrollReveal().reveal(
                tecnogiaHomeRef.current, 
                scroll_reaveal.habilidade_card);
        }
        
    }, []);

    const changeGitHub = ()=>{
        
        if(openLive) setOpenLive(!openLive);

        setOpenGithub(!openGithub)

        if(openGithub) 
            setValue("");
        else
            setValue(context.viewProjecto[0].github);
        
    }
    const changeLive = ()=>{
        
        if(openGithub) setOpenGithub(!openGithub);

        setOpenLive(!openLive);
        
        if(openLive) 
            setValue("");
        else
            setValue(context.viewProjecto[0].live);
        
    }

    return(
        <div id="details_header">
            <Link to={`/projecto/${context.viewProjecto[0].slug}`} 
                className="details_image" ref={imageHomeRef}
                onClick={()=>window.location.href = `/projecto/${context.viewProjecto[0].slug}`}
            >
                <img src={url} 
                    alt={context.viewProjecto[0].titulo} 
                    loading='lazy'
                    className={`details_image_lazy`}
                />
            </Link>
            
            <div className="details_info">
                <div className="details_info_title">
                    <h1 ref={titleHomeRef}>{ context.viewProjecto[0].titulo }</h1>
                </div>
                {
                    // Tipo de Projecto
                    context.viewProjecto[0].tipo && (
                        <div className="details_info_tipo_projecto">
                            <span>{context.viewProjecto[0].tipo}</span>
                        </div>
                    )
                }
                {
                    // Habilidade
                    context.viewProjecto[0].tecnologia && (
                        <div className="details_info_category border-line">
                            {
                                context.viewProjecto[0].tecnologia.split(';').map((el,i)=>(
                                    el && (
                                        <Link 
                                            key={i}
                                            to={`/habilidade/${el.toLowerCase()}`}
                                            ref={tecnogiaHomeRef}
                                        >
                                            { el }
                                        </Link>
                                    )
                                ))
                            }
                        </div>
                    )
                }
                <div className="details_info_git_live_projecto">
                    {
                        context.viewProjecto[0].github &&(
                            <button onClick={changeGitHub}
                                className={openGithub ? 'active':''}
                            >
                                Github
                            </button>
                        )
                    }
                    {
                        context.viewProjecto[0].live &&(
                            <button onClick={changeLive} 
                                className={openLive ? 'active':''}>
                                Live
                            </button>
                        )
                    }
                </div>
                {
                    // Open Github
                    value && (
                        <div className="details_info_category border-double-line">
                            {
                                textFormt.gitLiveFormat(value).map((el,i)=>(
                                    <Link key={i} to={el.url} target='_blank' className='special'>
                                        { el.name }
                                    </Link>
                                ))
                            }
                        </div>
                    )
                }
            </div>
    
        </div>
    )
}