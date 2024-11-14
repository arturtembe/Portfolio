import HeaderTitleHome from "../../templates/headerTitleHome";
import '../../../../styles/Home/Main/projecto/_style.scss';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipperHelper from "../../../../helpers/swipper.helper";
import CardProjectoSwipper from "./card";
import "swiper/swiper-bundle.css";
import PaginagionProjectoSwipper from "./pagination";
import { useContext } from "react";
import HomeContext from "../../../../utils/pages/home.context.page";

const swiperHomeHelper = new SwipperHelper().homeProjectoSwipper();

export default function ProjectoHomePage(){
    const context = useContext(HomeContext);

    return (  
        <section id='projectoHomePage' className='sectionHomePage'>
            <div id="habil_container">
                <HeaderTitleHome title="Projecto"/>
                
                <main id="mainProjecto"> 
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                        slidesPerView={swiperHomeHelper.slidesPerView}
                        slidesPerGroup={1}
                        spaceBetween={swiperHomeHelper.spaceBetween}
                        navigation= {swiperHomeHelper.navigation}
                        // pagination= {{ clickable: false, bulletElement: false }}
                        // scrollbar= {{ draggable: false }}
                        effect= {swiperHomeHelper.effect}
                        grabCursor= {swiperHomeHelper.grabCursor}
                        loop= {swiperHomeHelper.loop}
                        autoplay={swiperHomeHelper.autoplay}
                        onSlideChange={()=>{}}
                        onSwiper={swiper=>console.log(swiper)}
                        style={swiperHomeHelper.style}
                        breakpoints={swiperHomeHelper.breakpoints}
                    >
                            {
                                context.viewProjecto.map((el,i)=>(
                                    <SwiperSlide key={i}> 
                                        <CardProjectoSwipper data={el} />
                                    </SwiperSlide>
                                ))
                            }

                    </Swiper>
                </main>

                <PaginagionProjectoSwipper />
                
            </div>
        </section>
    )
}