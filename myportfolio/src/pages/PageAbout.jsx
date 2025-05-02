// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageAbout.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';

function PageAbout() {

    return (

        <container>


            <main id="about">
                <section className='about'>
                    <div className='about-me'>
                        <div className='me'>
                            <article className='about-article'>
                                <h3>About me </h3>
                                <div>
                                    <p className='about-intro'> Hi, I’m Arash — a Front-End Web Developer with a Creative Edge.
                                        <br></br>

                                        I'm a qualified and passionate web developer, recently graduated from the Front-End Web Development program at BCIT. With a unique blend of technical precision from 7 years in mechanical engineering and creative vision as a fashion photographer, I bring both analytical thinking and artistic flair to every project. I'm a detail-oriented team player who thrives on building clean, responsive, and visually compelling digital experiences.</p>
                                </div>
                                <div className='freetime'>
                                    <h4> Being creative in my free time</h4>
                                    <p className='freetime-intro'>Beyond the Code.
                                        <br></br>
                                        In my free time, I dive deep into the world of art — exploring galleries, attending photography workshops, and capturing stories through the lens. I’m also passionate about backcountry camping and traveling to discover historic and artistic landscapes around the world. These experiences fuel my creativity and inspire the design work I bring to the web.</p>
                                </div>

                            </article>

                        </div>



                        <div className='work'>
                            <article className='about-article'>
                                <h3> Work Experience</h3>
                                <div>
                                    <h4> Self-Employed</h4>
                                    <ul>
                                        <li> Photographer: Performing E-commerce ,Fashion , Lifestyle ,Wedding and
                                            portrait photography sessions for clients across Canada,
                                            United States and Europe.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4> Olympic Controls</h4>
                                    <ul>
                                        <li> Sales Engineer: Designing mechanical control systems for large residential/commercial projects in Vancouver area.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4> M & G Duravent</h4>
                                    <ul>
                                        <li> HVAC Engineer: Preparing quotes and system design for HVAC & plumbing
                                            systems of commercial,industrial and residential projects in
                                            the United States.</li>
                                    </ul>
                                </div>
                            </article>
                        </div>

                        <div className='education'>
                            <article className='about-article'>
                                <h3>Education</h3>
                                <div>
                                    <h4> BCIT (British Colombia Institution of Technology)</h4>
                                    <ul>
                                        <li> Front-End Web Development Certificate (Oct 2024- May 2025)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4> Herzing College</h4>
                                    <ul>
                                        <li> CAD Design diploma (Sept 2011- May 2013)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4> Aachen University of Applied Sciences </h4>
                                    <ul>
                                        <li> Bachelor of Mechanical Engineering (Sept 2004-Dev 2008)</li>
                                    </ul>
                                </div>


                            </article>
                        </div>

                    </div>

                </section>

            </main>

        </container>
    );
}

export default PageAbout;