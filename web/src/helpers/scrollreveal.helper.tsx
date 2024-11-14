export default class ScrollrevealHelper{
    homeReveal(){
        return  {
            inicioHome: {
                origin:'top',
                distance:'60px',
                duration:2500,
                reset: true,
                delay: 300
            },
            habilidade_card: {
                origin:'top',
                distance:'60px',
                duration:2500,
                reset: false,
                delay:1000,
                interval:100
            },
            projecto_pagination:{
                prev: {
                    origin:'left',
                    distance:'60px',
                    duration:2500,
                    reset: false,
                    delay: 300
                },
                next: {
                    origin:'right',
                    distance:'60px',
                    duration:2500,
                    reset: false,
                    delay: 300
                }
            },
            contacto_home: {
                findme: {
                    origin:'left',
                    distance:'60px',
                    duration:2500,
                    reset: false,
                    delay:1000,
                    interval:100
                },
                contact: {
                    origin:'rigth',
                    distance:'60px',
                    duration:2500,
                    reset: false,
                    delay:1000,
                    interval:100
                }
            },
            footer_home: {
                origin:'top',
                distance:'60px',
                duration:2500,
                reset: false,
                delay:300
            },
            pagination: {
                origin:'top',
                distance:'60px',
                duration:2500,
                reset: false,
                delay:300
            }
        }
    }
}