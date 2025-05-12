// Import necessary libraries and styles
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './PageAbout.css';
import Navbar from '../components/Navbar';

function PageAbout() {
    return (
        <>
            <Navbar />
            <main id="about">
                <section className="about">

                    <div className="about-me">
                        <Fade direction="up" cascade triggerOnce>
                            {/* ABOUT ME SECTION */}
                            <div className="me">
                                <article className="about-article">
                                    <h3>About Me</h3>
                                    <div>
                                        <p className="about-intro">
                                            Hi, I’m Arash — a Front-End Web Developer with a Creative Edge.
                                            <br />
                                            I'm a qualified and passionate web developer, recently graduated from the Front-End Web Development program at BCIT. With a unique blend of technical precision from 7 years in mechanical engineering and creative vision as a fashion photographer, I bring both analytical thinking and artistic flair to every project. I'm a detail-oriented team player who thrives on building clean, responsive, and visually compelling digital experiences.
                                        </p>
                                    </div>
                                    <div className="freetime">
                                        <h4>Being Creative in My Free Time</h4>
                                        <p className="freetime-intro">
                                            Beyond the Code.
                                            <br />
                                            In my free time, I dive deep into the world of art — exploring galleries, attending photography workshops, and capturing stories through the lens. I’m also passionate about backcountry camping and traveling to discover historic and artistic landscapes around the world. These experiences fuel my creativity and inspire the design work I bring to the web.
                                        </p>
                                    </div>
                                </article>
                            </div>

                            {/* WORK SECTION */}
                            <div className="work">
                                <article className="about-article">
                                    <h3>Work Experience</h3>

                                    <div>
                                        <h4>Self-Employed</h4>
                                        <ul>
                                            <li>
                                                Photographer: Performing E-commerce, Fashion, Lifestyle, Wedding, and Portrait photography sessions for clients across Canada, the United States, and Europe.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Olympic Controls</h4>
                                        <ul>
                                            <li>
                                                Sales Engineer: Designing mechanical control systems for large residential/commercial projects in the Vancouver area.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>M & G Duravent</h4>
                                        <ul>
                                            <li>
                                                HVAC Engineer: Preparing quotes and system design for HVAC & plumbing systems for commercial, industrial, and residential projects in the United States.
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            {/* EDUCATION SECTION */}
                            <div className="education">
                                <article className="about-article">
                                    <h3>Education</h3>

                                    <div>
                                        <h4>BCIT (British Columbia Institute of Technology)</h4>
                                        <ul>
                                            <li>Front-End Web Development Certificate (Oct 2024 – May 2025)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Herzing College</h4>
                                        <ul>
                                            <li>CAD Design Diploma (Sept 2011 – May 2013)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Aachen University of Applied Sciences</h4>
                                        <ul>
                                            <li>Bachelor of Mechanical Engineering (Sept 2004 – Dec 2008)</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </Fade>
                    </div>
                </section>
            </main>
        </>
    );
}

export default PageAbout;
