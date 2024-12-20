import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import ContactsPage from './pages/ContactsPage';
import Footer from './pages/Footer';
import NavBar from './pages/Navbar';
import NotificationsPage from './pages/NotificationsPage';
import ReservationsPage from './pages/ReservationsPage';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <AccueilPage />
            <AboutPage />
            <ServicesPage />
            <ReservationsPage />
            <ContactsPage />
            <Footer />
            <NotificationsPage />
        </div>
    );
}

export default App;
