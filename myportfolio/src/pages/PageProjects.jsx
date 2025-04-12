// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageProjects.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import movieImage from '../images/movie.png';
import shoppifyImage from '../images/shoppify.png';
import wackaMoleImage from '../images/wackamole.jpg';

function PageProjects() {

    return (
        <main id="projects">
            <div id='container'>
                <div className='projects-title'>
                    <p> Featured</p>
                    <p> Projects</p>
                </div>
                <div id='portfolio'>
                    <div className='projects-flex'>
                        <div className='projects-individual'>
                            <img className="project-image" src={wackaMoleImage} alt="Wack A Mole Game" />
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
                            <img className="project-image" src={movieImage} alt="moviedata base" />
                        </div>
                        <div className='projects-bio'>
                            <h2> Cinematic Wonders</h2>
                            <ul>
                                <li> React JS</li>
                                <li> Javascript</li>
                                <li> SASS </li>
                                <li> GitHub API</li>
                            </ul>
                        </div>

                    </div>

                </div>


            </div>

        </main>
    );
}

export default PageProjects;
