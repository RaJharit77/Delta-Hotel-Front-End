import React from 'react';
import { FaHotel, FaMapMarkedAlt } from 'react-icons/fa';
import { HiArrowLeft } from 'react-icons/hi';

interface NotFoundProps {
    title?: string;
    message?: string;
    onBack?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({
    title = 'Page introuvable',
    message = "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
    onBack,
}) => {
    const handleBack = () => {
        if (onBack) return onBack();
        window.history.back();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-gray-100 px-4">
            <div className="text-center max-w-lg">
                <div className="relative inline-flex items-center justify-center mb-8">
                    <FaHotel className="text-emerald-600 w-24 h-24 opacity-20" />
                    <FaMapMarkedAlt className="text-emerald-600 w-12 h-12 absolute" />
                </div>

                <h1 className="text-7xl font-extrabold text-emerald-700 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
                <p className="text-gray-600 mb-8">{message}</p>

                <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow-md hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                    <HiArrowLeft className="w-5 h-5" />
                    Retour
                </button>
            </div>
        </div>
    );
};

export default NotFound;