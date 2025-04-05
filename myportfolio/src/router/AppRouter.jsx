// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import PageHome from '../pages/PageHome'; // Import the PageHome component
import Navbar from '../components/Navbar';
import PageAbout from '../pages/PageAbout'; // Import the PageAbout component

function AppRouter() {
    return (
        <Router>
            <Navbar /> {/* Use Router to enable routing */}
            <Routes>
                {/* Define routes and associate with components */}
                <Route path="/" element={<PageHome />} /> {/* Home page route */}
                <Route path="/about" element={<PageAbout />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
