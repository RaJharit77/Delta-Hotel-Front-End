import React from 'react';
import backgroundImage from '../../public/img/services.jpg';

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
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/hebergement1.jpg" alt="Chambre luxueuse" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Suite Élite</div>
                                <p className="text-gray-700 text-base">
                                    Une suite luxueuse avec vue panoramique sur la ville.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/hebergement2.jpg" alt="Chambre prestige" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chambre Prestige</div>
                                <p className="text-gray-700 text-base">
                                    Confort, élégance et service personnalisé pour un séjour prestigieux.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/hebergement3.jpg" alt="Chambre luxe" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chambre Luxe</div>
                                <p className="text-gray-700 text-base">
                                    Chambre équipée de tous les services modernes avec une touche d'élégance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6mb-12">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/hebergement4.jpg" alt="Chambre luxueuse" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Suite Élite</div>
                                <p className="text-gray-700 text-base">
                                    Une suite luxueuse avec vue panoramique sur la ville.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/hebergement5.jpg" alt="Chambre prestige" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chambre Prestige</div>
                                <p className="text-gray-700 text-base">
                                    Confort, élégance et service personnalisé pour un séjour prestigieux.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/hebergement6.jpg" alt="Chambre luxe" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chambre Luxe</div>
                                <p className="text-gray-700 text-base">
                                    Chambre équipée de tous les services modernes avec une touche d'élégance.
                                </p>
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
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/conciergerie1.jpg" alt="Concierge personnalisé" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Concierge Personnalisé</div>
                                <p className="text-gray-700 text-base">
                                    Bénéficiez de services sur mesure pour répondre à tous vos besoins durant votre séjour.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/conciergerie2.jpg" alt="Réservations exclusives" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Réservations Exclusives</div>
                                <p className="text-gray-700 text-base">
                                    Laissez-nous organiser vos réservations dans les restaurants et événements exclusifs.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/conciergerie3.jpg" alt="Transferts privés" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Transferts Privés</div>
                                <p className="text-gray-700 text-base">
                                    Profitez de nos services de transfert privé pour vos déplacements en toute sérénité.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service de restauration */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de restauration</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Le restaurant Delta vous propose une expérience culinaire raffinée, avec une sélection de plats locaux et internationaux.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/restauration1.jpg" alt="Cuisine gastronomique" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Cuisine Gastronomique</div>
                                <p className="text-gray-700 text-base">
                                    Un voyage culinaire avec des plats signature préparés par des chefs de renommée.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/restauration2.jpg" alt="Buffet international" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Buffet International</div>
                                <p className="text-gray-700 text-base">
                                    Une variété de plats internationaux pour satisfaire tous les goûts.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/restauration3.jpg" alt="Dîner romantique" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Dîner Romantique</div>
                                <p className="text-gray-700 text-base">
                                    Un cadre intimiste avec une ambiance romantique pour un dîner en tête à tête.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spa et bien-être */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Spa et bien-être</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Détendez-vous et revitalisez votre corps et votre esprit dans notre spa de luxe.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/spa1.jpg" alt="Massage relaxant" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Massage Relaxant</div>
                                <p className="text-gray-700 text-base">
                                    Évacuez le stress avec un massage apaisant offert par nos experts.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/spa2.jpg" alt="Soins du visage" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Soins du Visage</div>
                                <p className="text-gray-700 text-base">
                                    Revitalisez votre peau avec nos traitements faciaux exclusifs.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/spa3.jpg" alt="Bains thermaux" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Bains Thermaux</div>
                                <p className="text-gray-700 text-base">
                                    Plongez dans des bains thermaux pour une expérience de détente totale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conférences et événements */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Conférences et événements</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Organisez vos conférences, banquets, ou événements privés dans nos espaces modernes et entièrement équipés.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/conference1.jpg" alt="Salle de conférence" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Salle de Conférence</div>
                                <p className="text-gray-700 text-base">
                                    Des salles de conférence modernes avec des équipements de haute technologie.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/conference2.jpg" alt="Salle de réunion" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Salle de Réunion</div>
                                <p className="text-gray-700 text-base">
                                    Un cadre professionnel pour vos réunions d'affaires importantes.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                            <img className="w-full" src="/img/conference3.jpg" alt="Banquets" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Banquets Privés</div>
                                <p className="text-gray-700 text-base">
                                    Des espaces élégants pour vos banquets ou événements privés.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
