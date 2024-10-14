import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import backgroundImage from '../assets/img/services.jpg';
const Services: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    const [showAllOtherServices, setShowAllOtherServices] = useState(false);

    const [showAllConciergerie, setShowAllConciergerie] = useState(false);

    // Listes de chambres
    const chambres = [
        { img: '/img/hebergement1.jpg', titre: 'Chambre Prestige/Deluxe', description: 'Confort, élégance et service personnalisé pour un séjour prestigieux.' },
        { img: '/img/hebergement2.jpg', titre: 'Chambre Luxe', description: 'Chambre équipée de tous les services modernes avec une touche d\'élégance.' },
        { img: '/img/hebergement3.jpg', titre: 'Suite Élite', description: 'Une suite luxueuse avec vue panoramique sur la ville.' },
        { img: '/img/hebergement4.jpg', titre: 'Chambre Classique/Deluxe', description: 'Décoration raffinée avec des équipements haut de gamme.' },
        { img: '/img/hebergement7.jpg', titre: 'Suite Junior', description: 'Un espace ouvert alliant chambre et salon.' },
        { img: '/img/hebergement6.jpg', titre: 'Chambre Exécutive', description: 'Espace de travail avec accès à un salon exécutif.' },
        { img: '/img/suitePresidentielle.jpg', titre: 'Suite Présidentielle', description: 'Suite avec services exclusifs comme un majordome personnel.' },
        { img: '/img/royale.jpg', titre: 'Suite Royale', description: 'Plusieurs chambres, salle de gym et terrasse panoramique.' },
        { img: '/img/hebergement9.jpg', titre: 'Penthouse', description: 'Terrasse privée et jacuzzi avec vue spectaculaire.' },
    ];

    const chambresAffichees = showMore ? chambres : chambres.slice(0, 3);

    //Listes des autres services
    const autresServices = [
        { img: '/img/sport.jpg', titre: 'Salle de Fitness et équipements sportifs', description: 'Installations modernes pour les entraînements, avec parfois des coachs personnels pour une expérience de bien-être complète.' },
        { img: '/img/piscines.jpg', titre: 'Piscine', description: 'Détendez-vous au bord de notre piscine extérieure chauffée, dans un cadre luxueux. Profitez d’un service de cocktails rafraîchissants tout en admirant une vue imprenable sur le paysage environnant.' },
        { img: '/img/serviceChambre.jpg', titre: 'Service en chambre 24h/24', description: 'Bénéficiez d\'un service en chambre 24h/24 pour déguster des plats raffinés et des boissons rafraîchissantes dans le confort de votre chambre, répondant à toutes vos envies.' },
        { img: '/img/wifi.jpg', titre: 'WiFi Gratuit', description: 'Restez connecté grâce à notre connexion WiFi haut débit gratuite, permettant aux clients d\'accéder à Internet, offrant ainsi une connexion rapide et pratique pendant votre séjour.' },
        { img: '/img/loisir.jpg', titre: 'Espace de Loisirs', description: 'Un espace dédié à la détente et aux activités récréatives offrant des installations variées telles que des jeux, des espaces de divertissement permettant aux clients de se divertir.' },
        { img: '/img/voiturier.jpg', titre: 'Service de voiturier et parking privé', description: 'Confiez votre véhicule à notre personnel qui le gare et le récupère à votre demande, assurant ainsi confort et sécurité.' },
    ];

    const servicesAffiches = showAllOtherServices ? autresServices : autresServices.slice(0, 3);

    // Utilisation de l'état pour gérer le nombre de cartes affichées
    const [showAllSpa, setShowAllSpa] = useState(false);

    // Liste des cartes
    const spaCards = [
        {
            imgSrc: "/img/spa1.jpg",
            alt: "Massage relaxant",
            title: "Massage Relaxant",
            description: "Évacuez le stress avec un massage apaisant offert par nos experts.",
        },
        {
            imgSrc: "/img/spa2.jpg",
            alt: "Soins du visage",
            title: "Soins du Visage",
            description: "Revitalisez votre peau avec nos traitements faciaux exclusifs.",
        },
        {
            imgSrc: "/img/spa3.jpg",
            alt: "Bains thermaux",
            title: "Bains Thermaux",
            description: "Plongez dans des bains thermaux pour une expérience de détente totale.",
        },
        {
            imgSrc: "/img/spa4.jpg",
            alt: "Soins du corps",
            title: "Soins du corps",
            description: "Gommages, enveloppements corporels et soins détox pour revitaliser et nourrir la peau.",
        },
        {
            imgSrc: "/img/spa5.jpg",
            alt: "Manucure et Pédicure",
            title: "Manucure et Pédicure",
            description: "Soins des ongles et beauté des mains et pieds pour une expérience de bien-être complète.",
        },
        {
            imgSrc: "/img/spa6.jpg",
            alt: "Rituels bien-être",
            title: "Rituels bien-être",
            description: "Expériences complètes alliant différents soins pour un bien-être holistique pour harmoniser le corps et l'esprit ",
        },
    ];

    const displayedSpaCards = showAllSpa ? spaCards : spaCards.slice(0, 3);

    //Services de conciergeries
    const conciergeries = [
        {
            title: 'Concierge Personnalisé',
            description: 'Bénéficiez de services sur mesure pour répondre à tous vos besoins durant votre séjour.',
            imgSrc: '/img/conciergerie1.jpg',
            alt: 'Concierge personnalisé'
        },
        {
            title: 'Réservations Exclusives',
            description: 'Laissez-nous organiser vos réservations dans les restaurants et événements exclusifs.',
            imgSrc: '/img/conciergerie2.jpg',
            alt: 'Réservations exclusives'
        },
        {
            title: 'Transferts Privés',
            description: 'Profitez de nos services de transfert privé pour vos déplacements en toute sérénité.',
            imgSrc: '/img/conciergerie3.jpg',
            alt: 'Transferts privés'
        },
        {
            title: 'Billeterie',
            description: 'Réservations de billets pour des spectacles, événements sportifs, ou concerts.',
            imgSrc: '/img/conciergerie.jpg',
            alt: 'Billetterie'
        },
        {
            title: 'Assistance shopping',
            description: 'Recommandations de boutiques de luxe et services de personnal shopper, offrant une expérience de shopping sur mesure',
            imgSrc: '/img/conciergerie.jpg',
            alt: 'Assistance shopping'
        },
        {
            title: 'Excursions et visites guidées',
            description: 'Planification de tours privés ou excursions locales, en personnalisant votre itinéraire selon vos intérêts et préférences.',
            imgSrc: '/img/conciergerie.jpg',
            alt: 'Excursions et visites guidées'
        },
    ];

    const displayConciergerieCards = conciergeries.slice(0, showAllConciergerie ? conciergeries.length : 3);

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
                    <p className="text-xl text-creme mb-4">
                        Profitez d'une gamme de services exclusifs pour rendre votre séjour inoubliable.
                    </p>
                </div>

                {/* Hébergement de luxe */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Hébergement de luxe</h2>
                    <p className="text-lg text-gray-300 mb-7">
                        Nos chambres et suites offrent un confort et une élégance inégalés.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {chambresAffichees.map((chambre, index) => (
                            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                            transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                            >
                                <img className="w-full h-64 object-cover" src={chambre.img} alt={chambre.titre} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{chambre.titre}</div>
                                    <p className="text-black text-base">{chambre.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="inline-flex items-center px-6 py-3 border border-transparent 
                            rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 
                            hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                            {showMore ? 'Voir moins' : 'Voir plus'}
                            <HiArrowRight className={`ml-2 transition-transform ${showMore ? '-rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Service de conciergerie */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Service de conciergerie</h2>
                    <p className="text-lg text-gray-300 mb-7">
                        Nos concierges dévoués sont à votre disposition pour vous aider avec des services personnalisés.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {displayConciergerieCards.map((service, index) => (
                            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                        transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                            >
                                <img className="w-full h-64 object-cover" src={service.imgSrc} alt={service.alt} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{service.title}</div>
                                    <p className="text-black text-base">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mb-12">
                        <button
                            className="inline-flex items-center px-6 py-3 border border-transparent 
                        rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 
                        hover:bg-emerald-700 focus:outline -none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            onClick={() => setShowAllConciergerie(!showAllConciergerie)}
                        >
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
                                    Une variété de plats internationaux pour satisfaire tous les goûts.
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
                                    Un cadre intimiste avec une ambiance romantique pour un dîner en tête à tête.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <a href="https://delta-restaurant-madagascar.onrender.com" target="_blank" rel="noopener noreferrer"
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
                    <p className="text-lg text-gray-300 mb-7">
                        Détendez-vous et revitalisez votre corps et votre esprit dans notre spa de luxe.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {displayedSpaCards.map((card, index) => (
                            <div
                                key={index}
                                className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                            transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                            >
                                <img className="w-full h-64 object-cover" src={card.imgSrc} alt={card.alt} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{card.title}</div>
                                    <p className="text-black text-base">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setShowAllSpa(!showAllSpa)}
                            className="inline-flex items-center px-6 py-3 border border-transparent 
                            rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 
                            hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
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

                {/* Autres Services */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center">Autres Services</h2>
                    <p className="text-lg text-gray-300 mb-7">
                        Découvrez notre service exclusif qui s'adapte à vos besoin, pour rendre votre séjour mémorable et sur mesure.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center items-stretch">
                        {servicesAffiches.map((service, index) => (
                            <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-emerald-600 mx-auto 
                            transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
                                <img className="w-full h-64 object-cover" src={service.img} alt={service.titre} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{service.titre}</div>
                                    <p className="text-black text-base">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setShowAllOtherServices(!showAllOtherServices)}
                            className="inline-flex items-center px-6 py-3 border border-transparent 
                            rounded-md shadow-sm text-base font-medium text-black hover:text-black bg-emerald-600 
                            hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                            {showAllOtherServices ? 'Voir moins' : 'Voir les autres services'}
                            <HiArrowRight className={`ml-2 transition-transform ${showAllOtherServices ? '-rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Services;
