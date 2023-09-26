import { ImagenPrincipal } from './components/ImagenPrincipal';
import TextoPrincipal from './components/TextoPrincipal';

export const HomePage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='text-center'>
                <ImagenPrincipal />
                <TextoPrincipal />
                <p className='text-2xl font-semibold'>Desarrollador Web Front-End</p>
            </div>
        </div>
    );
};
