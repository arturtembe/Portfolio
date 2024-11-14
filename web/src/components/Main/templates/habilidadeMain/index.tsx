import '../../../../styles/templates/HabilidadeMain/_style.scss';
import { HabilidadeInterface } from '../../../../interfaces/Habilidade/habilidade.interface';
import { lazy, Suspense } from 'react';
import HabilidadeSkeletonPage from '../skeleton/habilidade';

const LazyComponent = lazy(() => import('./card'));

export default function HabilidadeMain({data}:{data:HabilidadeInterface[]}){
    
    return (
        <main id="mainHabilidade"> 
            { 
                data.map((el,i)=>(
                    <Suspense fallback={<HabilidadeSkeletonPage />}>
                        <LazyComponent 
                            key={i} 
                            data={el} 
                        />
                    </Suspense>
                ))
            }
        </main>
    )
}