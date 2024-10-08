import React, { useEffect, useState } from 'react';

const heroImage = '/img/background.jpg'; // Direct public path

const Accueil: React.FC = () => {
    const [opacity, setOpacity] = useState<number>(0.5);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const newOpacity = 0.5 + scrollPos / 500;
            setOpacity(Math.min(newOpacity, 0.9));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="home" className="h-screen bg-cover bg-center w-full relative" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-black" style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}></div>
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold mb-4 text-white">Bienvenue au Delta Hotel</h1>
                <p className="text-xl mb-8 text-white">
                    Découvrez le luxe et le confort au cœur de la ville. Votre confort, notre priorité.
                </p>
                <a href="#rooms" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition">Explorer nos Chambres</a>
            </div>
        </div>
    );
};

export default Accueil;
