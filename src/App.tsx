import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import NavBar from './pages/Navbar';
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
        </div>
    );
}

export default App;
