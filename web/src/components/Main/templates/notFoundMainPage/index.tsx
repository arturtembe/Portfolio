import { ComponentProps } from 'react';
import '../../../../styles/templates/NotFoundMaindPage/_style.scss';

export default function NotFoundMaindPage({...props}:ComponentProps<'main'>){
    return (
        <main id="mainNoTFoundPage" {...props}> 
            <h1>404</h1>
            <h2>Error: 404 page not found</h2>
            <p>Sorry, the page you're looking for cannot be accessed</p>
        </main>
    )
}