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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/hebergement.jpg" alt={`Hébergement de luxe ${i + 1}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Chambres et suites luxueuses {i + 1}</div>
                                    <p className="text-gray-700 text-base">
                                        Un cadre raffiné avec des services haut de gamme pour un séjour inoubliable.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service de restauration */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de restauration</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Le restaurant Delta vous propose une expérience culinaire raffinée, avec une sélection de plats locaux et internationaux.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/restauration.jpg" alt={`Service de restauration ${i + 1}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Expérience culinaire raffinée {i + 1}</div>
                                    <p className="text-gray-700 text-base">
                                        Savourez nos plats préparés par des chefs de renommée dans un cadre élégant.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spa et bien-être */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Spa et bien-être</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Détendez-vous et revitalisez votre corps et votre esprit dans notre spa de luxe.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/spa.jpg" alt={`Spa et bien-être ${i + 1}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Relaxation et bien-être {i + 1}</div>
                                    <p className="text-gray-700 text-base">
                                        Offrez-vous un moment de détente avec nos soins de spa exclusifs.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Salles de conférence */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Salles de conférence</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Notre hôtel dispose de plusieurs salles de conférence entièrement équipées pour vos événements privés et professionnels.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/conference.jpg" alt={`Salles de conférence ${i + 1}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Événements sur mesure {i + 1}</div>
                                    <p className="text-gray-700 text-base">
                                        Organisez vos réunions et séminaires dans un cadre moderne et fonctionnel.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service de conciergerie */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de conciergerie</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Notre équipe de conciergerie est à votre disposition pour organiser vos excursions, transports et bien plus.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                <img className="w-full" src="/img/conciergerie.jpg" alt={`Service de conciergerie ${i + 1}`} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Services personnalisés {i + 1}</div>
                                    <p className="text-gray-700 text-base">
                                        Laissez notre équipe s'occuper de vos besoins pendant votre séjour.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
