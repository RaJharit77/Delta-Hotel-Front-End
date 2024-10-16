import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import ContactPage from './pages/ContactPage';
import Footer from './pages/Footer';
import NavBar from './pages/Navbar';
import ReservationPage from './pages/ReservationPage';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <AccueilPage />
            <AboutPage />
            <ServicesPage />
            <ReservationPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

export default App;
