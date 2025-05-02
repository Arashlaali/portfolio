// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router
import PageHome from '../pages/PageHome'; // Import the PageHome component
import Navbar from '../components/Navbar';
import PageAbout from '../pages/PageAbout'; // Import the PageAbout component

import Footer from '../components/Footer';

import PageProjects from '../pages/PageProjects';
import PagePhotography from '../pages/PagePhotography';


function AppRouter() {
    return (

        <Router>
            <Navbar /> {/* Use Router to enable routing */}
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/projects" element={<PageProjects />} />
                <Route path="/photography" element={<PagePhotography />} />
            </Routes>
            <Footer />

        </Router>
    );
}

export default AppRouter;
