import React from 'react';
import backgroundImage from '../../public/img/about.jpg';

const About: React.FC = () => {
    return (
        <div
            id='about'
            className="relative bg-cover bg-center text-noir py-12 px-6 sm:px-4 lg:px-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-creme mb-4">À propos de Delta Hotel</h1>
                    <p className="text-xl text-creme">
                        Un havre de luxe et de confort au cœur de la ville.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">Notre histoire</h2>
                    <p className="text-lg text-gray-300">
                        Depuis son inauguration, Delta Hotel s'est engagé à offrir une expérience hôtelière exceptionnelle. Fondé par des visionnaires de l'industrie de l'hospitalité, notre établissement est rapidement devenu un symbole d'élégance et de service impeccable.
                        Nous croyons que le véritable luxe réside dans les détails et l'attention portée à chaque client.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">Notre mission</h2>
                    <p className="text-lg text-gray-300">
                        Chez Delta Hotel, notre mission est de créer un environnement où le confort et le raffinement se rencontrent. Nous nous efforçons de dépasser les attentes de nos clients en offrant des services personnalisés et des installations de premier ordre, afin de rendre chaque séjour mémorable.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">Notre équipe</h2>
                    <p className="text-lg text-gray-300">
                        Notre équipe dévouée est composée de professionnels expérimentés dans l'art de l'hospitalité. Du personnel de réception aux concierges, chaque membre de notre équipe partage une passion pour l'excellence et un engagement envers la satisfaction totale de nos clients.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6">L'expérience Delta</h2>
                    <p className="text-lg text-gray-300">
                        En séjournant au Delta Hotel, vous découvrirez une ambiance harmonieuse où le confort moderne rencontre le charme classique. Nos chambres luxueuses, nos installations haut de gamme et notre attention aux détails créent une atmosphère unique, idéale pour les voyageurs d'affaires comme pour les touristes en quête de détente.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
