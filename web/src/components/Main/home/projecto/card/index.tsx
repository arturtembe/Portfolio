import { Link } from "react-router-dom";
import '../../../../../styles/Home/Main/projecto/card/_style.scss';
import { ProjectoInterface } from "../../../../../interfaces/Projecto/projecto.interface";
import ImageUtil from "../../../../../utils/image.util";
import TextUtil from "../../../../../utils/text.util";
import { useEffect, useState } from "react";

const imageFormat = new ImageUtil();
const textFormt = new TextUtil();

export default function CardProjectoSwipper({data}:{data:ProjectoInterface}){
    const [url, setUrl] = useState<string>("");
    
    useEffect(()=>{
        const viewUrl = async()=>{
            setUrl(
                await imageFormat.formatTextIcon(data.imageUrl)
            )
        }
        viewUrl();
        
    }, []);
    return (
        <Link to={`/projecto/${data.slug}`} id={`projecto_card_section`}>
            <div className="projecto_card_section_image">
                <img 
                    src={url} 
                    alt={data.titulo}
                    className="projecto_card_img" 
                    /> 
            </div>
            {/* ====== Habilidade====== */} 
            <div className="projecto_card_section_habilidade">
                <span className="projecto_habilidade_texto">
                    { textFormt.tecnologiaFormat(data.tecnologia) }
                </span>
            </div>
            <div className="projecto_card_section_content">
                <p className="projecto_card_section_content_title text--medium">
                    {data.titulo}
                </p>
            </div>
            {/* ==== TYPE ==== */}
            <div className="card_type_link">
                <span>{data.tipo}</span>
            </div>
            
        </Link>
    )
}