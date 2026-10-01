// Interfaces pour les données des services de l'hôtel
//Chambres
export interface Chambre {
    img: string;
    titre: string;
    description: string;
}

//Autres services
export interface AutresServices {
    img: string;
    titre: string;
    description: string;
}

//Spa et bien-être
export interface SpaCard {
    img: string;
    alt: string;
    title: string;
    description: string;
}

//Conciergerie
export interface Conciergerie {
    title: string;
    description: string;
    imgSrc: string;
    alt: string;
}

//Data
export interface Data {
    chambres: Chambre[];
    autresServices: AutresServices[];
    spaCards: SpaCard[];
    conciergeries: Conciergerie[];
}
