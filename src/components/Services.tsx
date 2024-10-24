import React, { useEffect, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import backgroundImage from '../assets/img/services.jpg';

// Interfaces pour les données des services de l'hôtel
//Chambres
interface Chambre {
    img: string;
    titre: string;
    description: string;
}

//Autres services
interface AutresServices {
    img: string;
    titre: string;
    description: string;
}

//Spa et bien-être
interface SpaCard {
    img: string;
    alt: string;
    title: string;
    description: string;
}

//Conciergerie
interface Conciergerie {
    title: string;
    description: string;
    imgSrc: string;
    alt: string;
}

//Data
interface Data {
    chambres: Chambre[];
    autresServices: AutresServices[];
    spaCards: SpaCard[];
    conciergeries: Conciergerie[];
}

const Services: React.FC = () => {
    const [hotelData, setHotelData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [showMoreChambres, setShowMoreChambres] = useState(false);
    const [showAllOtherServices, setShowAllOtherServices] = useState(false);
    const [showAllSpa, setShowAllSpa] = useState(false);
    const [showAllConciergerie, setShowAllConciergerie] = useState(false);

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || import.meta.env.VITE_REACT_API_URL || 'https://delta-hotel-back-end.onrender.com' || 'https://delta-hotel-back-end.vercel.app';

    /*const apiUrl = "http://localhost:5000";*/

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/services`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const data: Data[] = await response.json(); 
                console.log('Données récupérées:', data)

                if (data.length > 0) {
                    setHotelData(data[0]);
                } else {
                    throw new Error('Aucune donnée disponible');
                }
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    const chambresAffichees = showMoreChambres ? hotelData?.chambres : hotelData?.chambres?.slice(0, 3);
    const servicesAffiches = showAllOtherServices ? hotelData?.autresServices : hotelData?.autresServices?.slice(0, 3);
    const displayedSpaCards = showAllSpa ? hotelData?.spaCards : hotelData?.spaCards?.slice(0, 3);
    const displayConciergerieCards = showAllConciergerie ? hotelData?.conciergeries : hotelData?.conciergeries?.slice(0, 3);

    const renderCards = (items: any[], isConciergerie = false) => {
        return items.map((item, index) => (
            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img className="w-full h-64 object-cover" src={isConciergerie ? item.imgSrc : item.img} alt={isConciergerie ? item.alt : item.titre} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{isConciergerie ? item.title : item.titre}</div>
                    <p className="text-black text-base">{item.description}</p>
                </div>
            </div>
        ));
    };

    return (
        <div
            id="services"
            className="relative bg-cover bg-center text-noir py-12 px-6 sm:px-4 lg:px-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-creme mb-4">Nos Services</h1>
                    <p className="text-xl text-creme mb-4">Profitez d'une gamme de services exclusifs pour rendre votre séjour inoubliable.</p>
                </div>

                {/* Hébergement de luxe */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Hébergement de luxe</h2>
                    <p className="text-lg text-gray-300 mb-7">Nos chambres et suites offrent un confort et une élégance inégalés.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {hotelData && renderCards(chambresAffichees || [])}
                    </div>
                    <div className="text-center">
                        <button onClick={() => setShowMoreChambres(!showMoreChambres)} className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                            {showMoreChambres ? 'Voir moins' : 'Voir plus'}
                            <HiArrowRight className={`ml-2 transition-transform ${showMoreChambres ? '-rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Service de conciergerie */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de conciergerie</h2>
                    <p className="text-lg text-gray-300 mb-7">Nos concierges dévoués sont à votre disposition pour vous aider avec des services personnalisés.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {hotelData && renderCards(displayConciergerieCards || [], true)}
                    </div>
                    <div className="text-center mb-12">
                        <button onClick={() => setShowAllConciergerie(!showAllConciergerie)} className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                            {showAllConciergerie ? 'Montrer moins' : 'Montrer plus'}
                            <HiArrowRight className={`ml-2 transition-transform ${showAllConciergerie ? '-rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Service de restauration */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de restauration</h2>
                    <p className="text-lg text-gray-300 mb-7">
                        Le restaurant Delta vous propose une expérience culinaire raffinée, avec une sélection de plats locaux et internationaux.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <img className="w-full h-64 object-cover" src="/img/restauration1.jpg" alt="Cuisine gastronomique" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Cuisine Gastronomique</div>
                                <p className="text-gray-black text-base">
                                    Un voyage culinaire avec des plats signature préparés par des chefs de renommée nationale ou mondiale.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <img className="w-full h-64 object-cover" src="/img/restauration2.jpg" alt="Buffet international" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Buffet International</div>
                                <p className="text-black text-base">
                                    Une variété de plats internationaux pour satisfaire tous les goûts, le tout dans une ambiance conviviale et raffinée.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <img className="w-full h-64 object-cover" src="/img/restauration3.jpg" alt="Dîner romantique" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Dîner Romantique</div>
                                <p className="text-black text-base">
                                    Un cadre intimiste avec une ambiance romantique pour un dîner en tête à tête offrant une expérience inoubliable.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <a href="https://delta-restaurant-madagascar.vercel.app" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent 
                        rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 
                        hover:bg-emerald-700 focus:outline -none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                            Visitez notre restaurant
                            <HiArrowRight className="ml-2 -mr-1" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                {/* Spa et bien-être */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Spa et bien-être</h2>
                    <p className="text-lg text-gray-300 mb-7"> Détendez-vous et revitalisez votre corps et votre esprit dans notre spa de luxe.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {hotelData && renderCards(displayedSpaCards || [])}
                    </div>
                    <div className="text-center mb-12">
                        <button onClick={() => setShowAllSpa(!showAllSpa)} className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                            {showAllSpa ? "Afficher moins" : "Afficher plus"}
                            <HiArrowRight className={`ml-2 transition-transform ${showAllSpa ? '-rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Conférences et événements */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Conférences et événements</h2>
                    <p className="text-lg text-gray-300 mb-7">
                        Organisez vos conférences, banquets, ou événements privés dans nos espaces modernes et entièrement équipés.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <img className="w-full h-64 object-cover" src="/img/conference1.jpg" alt="Salle de conférence" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Salle de Conférence</div>
                                <p className="text-black text-base">
                                    Des salles de conférence modernes avec des équipements de haute technologie.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <img className="w-full h-64 object-cover" src="/img/conference2.jpg" alt="Salle de réunion" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Salle de Réunion</div>
                                <p className="text-black text-base">
                                    Un cadre professionnel pour vos réunions d'affaires importantes.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <img className="w-full h-64 object-cover" src="/img/conference3.jpg" alt="Banquets" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Banquets Privés</div>
                                <p className="text-black text-base">
                                    Des espaces élégants pour vos banquets ou événements privés.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Autres services */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Autres services</h2>
                    <p className="text-lg text-gray-300 mb-7">
                        Découvrez notre service exclusif qui s'adapte à vos besoin, pour rendre votre séjour mémorable et sur mesure.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {hotelData && renderCards(servicesAffiches || [])}
                    </div>
                    <div className="text-center mb-12">
                        <button onClick={() => setShowAllOtherServices(!showAllOtherServices)} className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                            {showAllOtherServices ? 'Voir moins' : 'Voir les autres services'}
                            <HiArrowRight className={`ml-2 transition-transform ${showAllOtherServices ? '-rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
