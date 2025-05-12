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
                                        <h4>Photographer </h4>
                                        <h5>Self-Employed (March 2021- Present)</h5>
                                        <ul>
                                            <li>Performing E-commerce, Fashion, Lifestyle, Wedding, and Portrait photography sessions for clients across Canada, the United States, and Europe.</li>
                                            <li>Collaborating closely with models, designers, stylists, and
                                                creative directors to produce high-quality visual content
                                                tailored to brand aesthetics and client goals.</li>

                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Sales Engineer</h4>
                                        <h5> Olympic Controls (March 2020 - April 2022) </h5>
                                        <ul>
                                            <li>
                                                Designed mechanical control systems for large residential/commercial projects in the Vancouver area.
                                            </li>
                                            <li>Prepared proposals, quotations and Bill of Materials.</li>
                                            <li>Performed weekly follow-up meetings with customers .</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4> HVAC Engineer</h4>
                                        <h5>M & G Duravent (September 2016 - March 2020)</h5>
                                        <ul>
                                            <li>
                                                Developed quotes and system design for HVAC & plumbing systems for commercial,and residential projects in the United States.
                                            </li>
                                            <li>Supervised manufacturing process of the designed parts in manufacturing facility at Montreal Quebec.</li>

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
                                        <h5> October 2024- May 2025</h5>
                                        <ul>
                                            <li>Front-End Web Development Certificate </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Herzing College</h4>
                                        <h5>September 2011 – May 2013</h5>
                                        <ul>
                                            <li>Computer Aided Design (CAD) Diploma </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4>Aachen University of Applied Sciences</h4>
                                        <h5>September 2004 – December 2008</h5>
                                        <ul>
                                            <li>Bachelor of Applied Science - Mechanical Engineering </li>
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
