// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageProjects.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import movieImage from '../images/movie.png';
import wackaMoleImage from '../images/wackamole.jpg';
import fotografieImage from '../images/fotografie.jpg';

function PageProjects() {

    return (
        <main id="projects">
            <title>Projects | Portfolio</title>
            <meta name="description" content="My projects" />
            <div id='container'>
                <div className='projects-title'>
                    <p> Featured</p>
                    <p> Projects</p>
                </div>
                <div id='portfolio'>
                    <div className='projects-flex'>
                        <div className='projects-individual'>
                            <a href="https://fotografiearash.bcitwebdeveloper.ca/" target='_blank' rel='noopener noreferrer'>
                                <img className="project-image" src={fotografieImage} alt="Fotografie Arash Website" />
                            </a>
                        </div>
                        <div className='projects-bio first-project'>
                            <h2> Artist Portfolio</h2>
                            <ul>
                                <li>WordPress</li>
                                <li> PHP </li>
                                <li>HTML</li>
                                <li> CSS </li>
                                <li> GitHub</li>
                            </ul>
                            <article className='projects-info'>
                                Fotografie Arash is a portfolio website designed for an artist. It showcases his work and provides information about his photography services. The website is built using WordPress, PHP, HTML, and CSS, ensuring a professional and visually appealing presentation.

                            </article>
                        </div>
                        <div className='projects-individual'>
                            <a href=" https://arash-laali.com/wack-a-mole/" target="_blank" rel="noopener noreferrer">
                                <img className="project-image" src={wackaMoleImage} alt="Wack a Mole Game" />
                            </a>
                        </div>
                        <div className='projects-bio'>
                            <h2> Wack A Mole Game</h2>
                            <ul>
                                <li> Javascript</li>
                                <li>HTML</li>
                                <li> CSS </li>
                            </ul>
                            <article className='project-bio'>
                                Wack A Mole is an entertaining game written with Javascript, HTML and CSS. The objective is to hit the moles that pop up from their holes. The game is designed to be fun and engaging for children, helping them develop their hand-eye coordination and reflexes.

                            </article>
                        </div>
                        <div className='projects-individual'>
                            <a href="https://arash-laali.com/cinematic-wonders" target="_blank" rel="noopener noreferrer">
                                <img className="project-image" src={movieImage} alt="moviedata base" />
                            </a>
                        </div>
                        <div className='projects-bio last-project'>
                            <h2> Cinematic Wonders</h2>
                            <ul>
                                <li> React JS</li>
                                <li> Javascript</li>
                                <li> SASS </li>
                                <li> GitHub API</li>
                            </ul>
                            <article className='project-bio'>
                                Cinematic Wonders is a movie database application built with React JS. It allows users to search for movies, view details, and explore various genres. The app fetches data from the GitHub API, providing a seamless experience for movie enthusiasts.

                            </article>
                        </div>

                    </div>

                </div>


            </div>

        </main>
    );
}

export default PageProjects;
