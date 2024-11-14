import { useEffect, useRef, useState } from 'react';
import '../../../../../styles/templates/HeaderTitlePage/search/_style.scss';
import ScrollReveal from 'scrollreveal';

export default function SearchHeaderPage({action = 'habilidade'}:{action?: string}){
    const formRef = useRef<HTMLFormElement>(null);
    const [search, setSearch] = useState<string>("");
    
    useEffect(()=>{
        if(formRef.current){
            ScrollReveal().reveal(formRef.current, 
                {
                    origin:'right',
                    distance:'60px',
                    duration:2500,
                    reset: false,
                    delay:1000
                }
            );
        }
    }, []);
    return (
        <form action={`/${action}?search=${search}`} ref={formRef} 
            className="search-bar"
        >
            <input 
                type="search" 
                name="search" 
                pattern=".*\S.*" 
                required={true}
                className=""
                placeholder="Search..."
                value={search}
                onChange={e=>setSearch(e.target.value)}
            />

            <button className="search-btn" type="submit">
                <span>Search</span>
            </button>

        </form>
    )
}