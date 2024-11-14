export default class SwipperHelper{
    homeProjectoSwipper(){
        return  {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: { 
                prevEl: `#button_prev`,
                nextEl: `#button_next`,  
            },
            // pagination= {{ clickable: false, bulletElement: false }}
            // scrollbar= {{ draggable: false }}
            effect: "cube",
            grabCursor: true,
            loop: true,
            direction: 'horizontal',
            speed: 2400,
            parallax: true,
            observer: true,
            obseParents: true,
            autoplay: {
                delay: 4000, 
                disableOnInteraction: true
            },
            style: { 
                padding: '30px 10px', 
                overflow: 'hidden' 
            },
            breakpoints: {
                1100: {
                    slidesPerView: 4
                },
                950: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 2
                },
                700: {
                    slidesPerView: 2
                },
                100: {
                    slidesPerView: 1
                }
        
            }
        }
    }
    detailsProjectoSwipper(){
        return  {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: { 
                prevEl: `#button_prev`,
                nextEl: `#button_next`,  
            },
            // pagination= {{ clickable: false, bulletElement: false }}
            // scrollbar= {{ draggable: false }}
            effect: "cube",
            grabCursor: true,
            loop: true,
            direction: 'horizontal',
            speed: 2400,
            parallax: true,
            observer: true,
            obseParents: true,
            autoplay: {
                delay: 4000, 
                disableOnInteraction: true
            },
            style: { 
                padding: '30px', 
                overflow: 'hidden' 
            },
            breakpoints: {
                
            }
        }
    }
}