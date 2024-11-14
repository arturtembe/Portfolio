import { ChevronLeft, ChevronRight } from "lucide-react";
import '../../../../../styles/Home/Main/projecto/pagination/_style.scss';
import { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import ScrollrevealHelper from "../../../../../helpers/scrollreveal.helper";

const scroll_reaveal = new ScrollrevealHelper().homeReveal().projecto_pagination;

export default function PaginagionProjectoSwipper(){
    const prevPaginationHomeRef = useRef<HTMLButtonElement>(null);
    const nextPaginationHomeRef = useRef<HTMLButtonElement>(null);
    
    useEffect(()=>{
        if(prevPaginationHomeRef.current){
            ScrollReveal().reveal(prevPaginationHomeRef.current, scroll_reaveal.prev);
        }
        if(nextPaginationHomeRef.current){
            ScrollReveal().reveal(nextPaginationHomeRef.current, scroll_reaveal.next);
        }
    }, []);

    return (
        <footer id="paginationSwipper">
            <button id="button_prev" ref={prevPaginationHomeRef}>
                <ChevronLeft size={25} color="#fff" />
            </button>
            <button id="button_next" ref={nextPaginationHomeRef}>
                <ChevronRight size={25} color="#fff" />
            </button>
        </footer>
    )
}