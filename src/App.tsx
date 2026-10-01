import React from 'react';
import AboutPage from './pages/AboutPage';
import AccueilPage from './pages/AccueilPage';
import ContactsPage from './pages/ContactsPage';
import Footer from './pages/Footer';
import NavBar from './pages/Navbar';
import NotificationsPage from './pages/NotificationsPage';
import ReservationsPage from './pages/ReservationsPage';
import ServicesPage from './pages/ServicesPage';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

const KNOWN_PATHS = ['/', '/index.html'];

const App: React.FC = () => {
    const currentPath =
        typeof window !== 'undefined' ? window.location.pathname : '/';

    const isKnownPath = KNOWN_PATHS.includes(currentPath);

    return (
        <ErrorBoundary>
            {isKnownPath ? (
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
            ) : (
                <>
                    <NavBar />
                    <NotFound
                        title="Page introuvable"
                        message={`La page "${currentPath}" n'existe pas sur notre site.`}
                    />
                    <Footer />
                </>
            )}
        </ErrorBoundary>
    );
};

export default App;
