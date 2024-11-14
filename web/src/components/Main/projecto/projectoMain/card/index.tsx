import { Link } from 'react-router-dom';
import '../../../../../styles/Projecto/projectoMain/card/_style.scss';
import ScrollrevealHelper from '../../../../../helpers/scrollreveal.helper';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { ProjectoInterface } from '../../../../../interfaces/Projecto/projecto.interface';
import ImageUtil from '../../../../../utils/image.util';
import TextUtil from '../../../../../utils/text.util';

const scroll_reaveal = new ScrollrevealHelper().homeReveal();
const imageFormat = new ImageUtil();
const textFormt = new TextUtil();

export default function CardProjecto({data}:{data:ProjectoInterface}){
    const cardProjectRef = useRef<HTMLAnchorElement>(null);
    const [url, setUrl] = useState<string>("");
    
    useEffect(()=>{
        if(cardProjectRef.current){
            ScrollReveal().reveal(cardProjectRef.current, scroll_reaveal.habilidade_card);
        }
        const viewUrl = async()=>{
            setUrl(
                await imageFormat.formatTextIcon(data.imageUrl)
            )
        }
        viewUrl();
        
    }, []);
    return (
        <Link to={`/projecto/${data.slug}`} id="project_card" ref={cardProjectRef}>
        <div className="card__image-container">
            <img 
                src={url} 
                alt={data.titulo}
                className="img" 
                loading="lazy"
            /> 
        </div>
        <div className="projecto_card_section_habilidade">
                <span className="projecto_habilidade_texto">
                    {
                        textFormt.tecnologiaFormat(data.tecnologia)
                    }
                </span>
        </div>
        <div className="card__content">
            <p className="card__title text--medium">
                { data.titulo }
            </p>
        </div>
        {/* ==== TYPE ==== */}
        <div className="card_type_link">
            <span>{data.tipo}</span>
        </div>
    </Link>
    )
}