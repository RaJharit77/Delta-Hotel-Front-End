import React from 'react';
import backgroundImage from '../assets/img/services.jpg';

const Services: React.FC = () => {
    return (
        <div
            id='services'
            className="relative bg-cover bg-center text-noir py-12 px-6 sm:px-4 lg:px-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-creme mb-4">Nos Services</h1>
                    <p className="text-xl text-creme mb-4">
                        Profitez d'une gamme de services exclusifs pour rendre votre séjour inoubliable.
                    </p>
                </div>

                {/* Hébergement de luxe */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Hébergement de luxe</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Nos chambres et suites offrent un confort et une élégance inégalés, équipées des dernières technologies pour rendre votre séjour des plus agréables.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement1.jpg" alt="Chambre Prestige/Deluxe" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Chambre Prestige/Deluxe</div>
                                    <p className="text-gray-700 text-base">
                                        Confort, élégance et service personnalisé pour un séjour prestigieux.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement2.jpg" alt="Chambre Luxe" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"> Chambre Luxe</div>
                                    <p className="text-gray-700 text-base">
                                        Chambre équipée de tous les services modernes avec une touche d'élégance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement3.jpg" alt="Suite Élite" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Suite Élite </div>
                                    <p className="text-gray-700 text-base">
                                        Une suite luxueuse avec vue panoramique sur la ville.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement4.jpg" alt="Chambre Classique/Deluxe" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Chambre Classique/Deluxe</div>
                                    <p className="text-gray-700 text-base">
                                        Les chambres offrent une décoration raffinée avec des matériaux luxueux et des équipements haut de gamme,
                                        incluant des lits king-size, des salles de bains en marbre et des vues panoramiques.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement7.jpg" alt="Suite Junior" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Suite Junior</div>
                                    <p className="text-gray-700 text-base">
                                        La suite junior offre un espace ouvert combinant chambre et salon, avec une grande salle de bain 
                                        et parfois un balcon ou une terrasse privée, créant un environnement spacieux et confortable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement6.jpg" alt="Chambre exécutive" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Chambre Exécutive</div>
                                    <p className="text-gray-700 text-base">
                                        Les chambres exécutives, plus spacieuses et situées en hauteur avec des vues panoramiques, 
                                        offrent des équipements supplémentaires tels qu'un espace de travail, une machine à café 
                                        et l'accès à un salon exécutif avec services exclusifs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/suitePresidentielle.jpg" alt="Suite Présidentielle" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Suite Présidentielle</div>
                                    <p className="text-gray-700 text-base">
                                        La suite présidentielle, l'une des plus grandes dans un hôtel de luxe, propose plusieurs pièces 
                                        et des services exclusifs comme un majordome personnel, un service de limousine et un accès VIP.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/royale.jpg" alt="Suite Royale" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Suite Royale</div>
                                    <p className="text-gray-700 text-base">
                                        La suite royale, surpassant la suite présidentielle en luxe et exclusivité, offre plusieurs chambres, 
                                        des salles de bains avec spa, une salle de cinéma, une salle de gym, une terrasse panoramique,
                                        ainsi que des services sur mesure comme un majordome privé et un chef personnel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement9.jpg" alt="Penthouse" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Penthouse</div>
                                    <p className="text-gray-700 text-base">
                                        Le penthouse, situé au dernier étage de l'hôtel, offre une vue spectaculaire et 
                                        des espaces luxueux avec une terrasse privée, un jacuzzi, une salle de cinéma, 
                                        ainsi que des services sur mesure incluant un majordome.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service de conciergerie */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de conciergerie</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Nos concierges dévoués sont à votre disposition pour vous aider avec des services personnalisés.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/concierge1.jpg" alt="Concierge" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Réservations</div>
                                    <p className="text-gray-700 text-base">
                                        Réservez des restaurants, des visites et des expériences uniques grâce à nos concierges experts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/concierge2.jpg" alt="Concierge" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Transport</div>
                                    <p className="text-gray-700 text-base">
                                        Profitez de services de transport, y compris des transferts aéroport, des locations de voiture et 
                                        des chauffeurs privés.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/concierge3.jpg" alt="Concierge" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Expériences sur mesure</div>
                                    <p className="text-gray-700 text-base">
                                        Créez des expériences personnalisées selon vos préférences et intérêts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
