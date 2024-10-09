import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import NavBar from './pages/Navbar';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <AccueilPage />
            <AboutPage />
            <ServicesPage />
        </div>
    );
}

export default App;
