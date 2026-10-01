import React from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

interface ErrorProps {
    title?: string;
    message?: string;
    details?: string | null;
    onRetry?: () => void;
    fullScreen?: boolean;
}

const Error: React.FC<ErrorProps> = ({
    title = 'Une erreur est survenue',
    message = "Nous n'avons pas pu charger les données. Veuillez réessayer.",
    details = null,
    onRetry,
    fullScreen = false,
}) => {
    return (
        <div
            className={`flex items-center justify-center bg-red-50 px-4 ${fullScreen ? 'min-h-screen' : 'py-20'
                }`}
        >
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg border border-red-100 p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                    <FaExclamationTriangle className="text-red-500 w-10 h-10" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
                <p className="text-gray-600 mb-4">{message}</p>

                {details && (
                    <pre className="text-left text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 mb-6 overflow-x-auto text-red-700">
                        {details}
                    </pre>
                )}

                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500 text-white font-medium shadow-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        <FaRedo className="w-4 h-4" />
                        Réessayer
                    </button>
                )}
            </div>
        </div>
    );
};

export default Error;