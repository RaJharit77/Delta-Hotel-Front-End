import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Notifications: React.FC = () => { 
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-gray-800 bg-opacity-75 shadow-lg rounded-lg p-4 w-80 border border-gray-600 z-50">
            <p className="text-creme font-semibold text-lg text-left pt-2.5">Visitez notre restaurant !</p>
            <p className="text-gray-300 mt-2 text-left">
                Découvrez une expérience culinaire unique, alliant saveurs authentiques et convivialité, pour un moment inoubliable.
            </p>
            <button
                onClick={() => window.open("https://delta-restaurant-madagascar.vercel.app", "_blank")}
                className="inline-block mt-4 bg-creme text-black py-2 px-4 rounded-md hover:bg-or transition duration-300 cursor-pointer"
            >
                En savoir plus
            </button>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-creme hover:text-or bg-emerald-700 bg-opacity-50 cursor-pointer"
                aria-label="Fermer la notification"
            >
                <FaTimes />
            </button>
        </div>
    );
};

export default Notifications;
