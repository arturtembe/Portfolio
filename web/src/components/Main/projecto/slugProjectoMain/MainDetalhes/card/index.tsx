import { Link } from "react-router-dom";
import '../../../../../styles/Home/Main/projecto/card/_style.scss';
import { useEffect, useState } from "react";

// const imageFormat = new ImageUtil();
// const textFormt = new TextUtil();

export default function CardDetailsProjectoSwipper(){
    const [url, setUrl] = useState<string>("");
    
    useEffect(()=>{
        const viewUrl = async()=>{
            setUrl(
                ""
                //await imageFormat.formatTextIcon(data.imageUrl)
            )
        }
        viewUrl();
        
    }, []);
    return (
        <Link to={``} id={`projecto_card_section`}>
            <div className="projecto_card_section_image">
                <img 
                    src={url} 
                    alt={""}
                    className="projecto_card_img" 
                    /> 
            </div>
            <div className="projecto_card_section_content">
                <p className="projecto_card_section_content_title text--medium">
                    {""}
                </p>
            </div>
            
        </Link>
    )
}