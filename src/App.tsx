import React from 'react';
import AccueilPage from './pages/AccueilPage';
import NavBar from './pages/Navbar';

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <AccueilPage />
        </div>
    );
}

export default App;
