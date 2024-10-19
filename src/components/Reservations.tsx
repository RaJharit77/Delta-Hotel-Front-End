import { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface ReservationData {
    fullName: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    guests: string;
}

function HotelReservation() {
    const [reservationData, setReservationData] = useState<ReservationData>({
        fullName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomType: '',
        guests: '',
    });

    const [status, setStatus] = useState<string | null>(null);
    const [responseMessage, setResponseMessage] = useState<string>('');

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL || import.meta.env.VITE_REACT_API_URL || 'https://delta-hotel-back-end.onrender.com' || 'https://delta-hotel-back-end.vercel.app';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setReservationData({ ...reservationData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/reservations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setResponseMessage(data.message);
                setReservationData({
                    fullName: '',
                    email: '',
                    phone: '',
                    checkIn: '',
                    checkOut: '',
                    roomType: '',
                    guests: '',
                });
            } else {
                setStatus('error');
                setResponseMessage(data.message || 'Une erreur est survenue.');
            }
        } catch (error) {
            console.error('Erreur lors de la réservation:', error);
            setStatus('error');
            setResponseMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div
            id="reservations"
            className="h-screen flex items-center justify-center bg-cover bg-center text-center relative"
            style={{ backgroundImage: "url('/img/reservations.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

            <div className="relative z-10 bg-white bg-opacity-10 p-6 rounded-lg shadow-xl max-w-lg w-full my-20">
                <h2 className="text-4xl font-bold mb-8 text-creme">Réservez votre Séjour</h2>
                <p className="text-lg text-creme mb-4">
                    Remplissez le formulaire ci-dessous pour réserver une chambre dans notre hôtel de luxe.
                </p>

                {status === 'success' && (
                    <div className="flex items-center justify-center text-green-500 mb-4">
                        <FaCheckCircle className="mr-2" />
                        <span>{responseMessage}</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="flex items-center justify-center text-red-500 mb-4">
                        <FaTimesCircle className="mr-2" />
                        <span>{responseMessage}</span>
                    </div>
                )}

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Nom complet"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.fullName}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.email}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Numéro de Téléphone"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.phone}
                        />
                    </div>

                    <div className="mb-4">
                        <DatePicker
                            selected={reservationData.checkIn ? new Date(reservationData.checkIn) : null}
                            onChange={(date: Date | null) => {
                                if (date) {
                                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                                    setReservationData({
                                        ...reservationData,
                                        checkIn: formattedDate,
                                    });
                                }
                            }}
                            placeholderText="Date d'arrivée"
                            className="w-full pl-5 pr-60 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <DatePicker
                            selected={reservationData.checkOut ? new Date(reservationData.checkOut) : null}
                            onChange={(date: Date | null) => {
                                if (date) {
                                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                                    setReservationData({
                                        ...reservationData,
                                        checkOut: formattedDate,
                                    });
                                }
                            }}
                            placeholderText="Date de départ"
                            className="w-full pl-5 pr-60 py-2 border border-creme rounded-md bg-transparent text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <select
                            name="roomType"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white cursor-pointer"
                            onChange={handleChange}
                            value={reservationData.roomType}
                        >
                            <option value="" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Type de Chambre</option>
                            <option value="chambre_prestige" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Chambre Prestige/Deluxe</option>
                            <option value="suite_presidentielle" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Suite Présidentielle</option>
                            <option value="suite_deluxe" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Suite Élite</option>
                            <option value="chambre_standard" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Chambre Luxe</option>
                            <option value="chambre_classique" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Chambre Classique/Deluxe</option>
                            <option value="suite_junior" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Suite Junior</option>
                            <option value="chambre_Exécutive" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Chambre Exécutive</option>
                            <option value="suite_royale" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Suite Royale</option>
                            <option value="Penthouse" className='text-emerald-600 bg-yellow-50 cursor-pointer'>Penthouse</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <input
                            type="number"
                            name="guests"
                            placeholder="Nombre des personnes"
                            className="w-full px-4 py-2 border border-creme rounded-md bg-transparent text-white"
                            onChange={handleChange}
                            value={reservationData.guests}
                        />
                    </div>

                    <button type="submit" className="w-full bg-creme text-black py-2 px-4 rounded hover:bg-or transition">
                        Réserver
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HotelReservation;
