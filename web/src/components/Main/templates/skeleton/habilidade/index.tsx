import '../../../../../styles/templates/Skeleton/Habilidade/_style.scss';

export default function HabilidadeSkeletonPage(){
    return (
        <div id="habilidade_lazy_animation">
            <div className="habilidade_lazy_lds_ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}