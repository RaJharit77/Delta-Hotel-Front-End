import { ChangeEvent, FormEvent, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || import.meta.env.VITE_REACT_API || 'https://delta-hotel-back-end.onrender.com' || 'https://delta-hotel-back-end.vercel.app';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitStatus(null);
        try {
            const response = await fetch(`${apiUrl}/api/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erreur de l\'envoi');
            }

            const data = await response.json();
            setSubmitStatus({ type: 'success', message: data.message });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Une erreur est survenue. Veuillez réessayer plus tard.',
            });
        }
    };

    return (
        <div
            id="contact"
            className="relative py-16 bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/contact.jpg')`,
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-creme sm:text-4xl sm:leading-10">
                        Contactez-nous
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
                        N'hésitez pas à nous contacter pour toute question sur nos services ou autre chose.
                    </p>
                </div>

                <div className="mt-12 lg:flex lg:justify-between lg:items-start">
                    <div className="lg:w-1/2 lg:pr-8">
                        <form onSubmit={handleSubmit} className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 shadow-lg rounded-lg p-8">
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Nom et Prénoms
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 block bg-black w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600 text-white"
                                    placeholder="Votre nom et prénoms"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block bg-black w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600 text-white"
                                    placeholder="Votre email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="mt-1 block bg-black w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600 text-white"
                                    placeholder="Sujet"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    className="mt-1 block bg-black w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring focus:border-emerald-600 text-white"
                                    placeholder="Votre message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-creme text-black px-6 py-2 rounded hover:bg-or transition-colors duration-300"
                                >
                                    Envoyer le message
                                </button>
                            </div>

                            {submitStatus && (
                                <div
                                    className={`mt-6 text-center text-lg ${submitStatus.type === 'success' ? 'text-emerald-500' : 'text-red-500'}`}
                                >
                                    {submitStatus.type === 'success' ? (
                                        <FaCheckCircle className="inline mr-2" />
                                    ) : (
                                        <FaTimesCircle className="inline mr-2" />
                                    )}
                                    {submitStatus.message}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-8">
                        <div className="bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 shadow-lg rounded-lg p-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Coordonnées</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                                Vous pouvez également nous contacter directement à notre adresse ou par téléphone.
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <span className="font-bold text-gray-900 dark:text-white">Adresse :</span> Rue de l'Élégance, 101 Antananarivo Ville, Madagascar
                                </li>
                                <li>
                                    <span className="font-bold text-gray-900 dark:text-white">Téléphones :</span> +261 034 00 000 00 ou +261 039 00 000 00
                                </li>
                                <li>
                                    <span className="font-bold text-gray-900 dark:text-white">Email :</span> delta.hotel@gmail.com
                                </li>
                            </ul>

                            <div className="mt-8">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Localisation</h4>
                                <div className="relative h-64">
                                    <img
                                        src="/img/carte.png"
                                        alt="Carte de localisation"
                                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
