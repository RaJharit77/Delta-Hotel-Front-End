import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import NavBar from './pages/Navbar';

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <AccueilPage />
            <AboutPage />
        </div>
    );
}

export default App;
