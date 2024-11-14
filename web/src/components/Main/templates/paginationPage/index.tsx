import { Link } from "react-router-dom";
import '../../../../styles/templates/PaginationPage/_style.scss';
import { ChevronLeft, ChevronRight } from "lucide-react";
//import paginationDefaultHelper from "../../../../helpers/default/pagination.default.helper.tsxhabilidade.default.helper";

interface PageInterface{
    page: number;
    title: string;
    url: string;
}
export default function PaginationPage(
    {page = 1, search = "", title = "habilidade", length = -1}: 
    {
        page?: number, search?: string,
        title?: "habilidade"|"projecto",
        length?: number
    }){

        const lengthPage = ()=> {
            return length < 5 ? length: length-1;
        }

        const paginationPage = ()=>{

            const pageLength:PageInterface[] = [];

            for(let i=0;i<lengthPage();i++){

                const pg = i+1;
                if(lengthPage() < 5){
                    pageLength.push(
                        {
                            page: pg,
                            url: search ? `/${title}?p=${pg}&search=${search}`:`/${title}?p=${pg}`,
                            title: `${pg}`
                        }
                    );
                    
                }
                else {
                    if(pg === length){
                        pageLength.push(
                            {
                                page: pg,
                                url: search ? `/${title}?p=${pg}&search=${search}`:`/${title}?p=${pg}`,
                                title: `${pg}`
                            }
                        );
                    }
                    else if(pg <= 3){
                        pageLength.push(
                            {
                                page: pg,
                                url: search ? `/${title}?p=${pg}&search=${search}`:`/${title}?p=${pg}`,
                                title: pg < 3? `${pg}`: `...`
                            }
                        );
                    }
                }

            }
            return pageLength;
        }

    return (
        <aside id="paginationPage">
            {
                // Prev 
                page > 1 && (
                    <Link
                        to={search ? `/${title}?p=${page-1}&search=${search}`:`/${title}?p=${page-1}`} 
                        onClick={ 
                            ()=>window.location.href = search ? `/${title}?p=${page-1}&search=${search}`:`/${title}?p=${page-1}`
                        }
                    >
                        <ChevronLeft size={14} color="#fff"/>
                    </Link>
                )
            }
            {
                paginationPage().map((el,i)=>(
                    <Link
                        key={i} 
                        className={page === el.page ? "active": ""}
                        to={el.url} 
                        onClick={ ()=>window.location.href = el.url}
                    >{el.title}</Link>
                ))
            }
            {
                // Last 
                length >= 5 && (
                    <Link
                        className={page === length ? "active": ""}
                        to={search ? `/${title}?p=${length}&search=${search}`:`/${title}?p=${length}`} 
                        onClick={ 
                            ()=>window.location.href = search ? `/${title}?p=${length}&search=${search}`:`/${title}?p=${length}`
                        }
                    >{length}</Link>
                )
            }
            {
                // Prev 
                page < length && (
                    <Link
                        to={search ? `/${title}?p=${page+1}&search=${search}`:`/${title}?p=${page+1}`} 
                        onClick={ 
                            ()=>window.location.href = search ? `/${title}?p=${page+1}&search=${search}`:`/${title}?p=${page+1}`
                        }
                    >
                        <ChevronRight size={14} color="#fff"/>
                    </Link>
                )
            }
            
        </aside>
    )
}