import '../../../../styles/Projecto/projectoMain/_style.scss';
import { ProjectoInterface } from '../../../../interfaces/Projecto/projecto.interface';
import { lazy, Suspense } from 'react';
import ProjectoSkeletonPage from '../../templates/skeleton/projecto';

const LazyComponent = lazy(() => import('./card'));

export default function ProjectoMain({data}:{data:ProjectoInterface[]}){

    return ( 
        <main id="mainProjecto"> 
        {
            data.map((el,i)=>(
                <Suspense fallback={<ProjectoSkeletonPage />}>
                    <LazyComponent key={i} data={el} />
                </Suspense>
            ))
        }
        </main>
    )
}