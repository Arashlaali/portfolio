// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageProjects.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import movieImage from '../images/movie.png';

function PageProjects() {

    return (
        <main id="projects">
            <div id='container'>
                <div id='portfolio'>
                    <div className='projects-title'>
                        <p> Featured</p>
                        <p> Projects</p>
                    </div>
                    <div className='projects-flex'>
                        <div className='projects-individual'>
                            <img className="project-image" src={movieImage} alt="moviedata base" />
                        </div>
                        <div className='projects-bio'>
                            <p> Cinematic Wonders</p>
                            <ul>
                                <li> Javascript</li>
                                <li> React</li>
                                <li> SASS </li>
                                <li> GitHub API</li>
                            </ul>
                        </div>
                        <div className='projects-icon'>

                        </div>
                    </div>

                </div>


            </div>
        </main>
    );
}

export default PageProjects;
