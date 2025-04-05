// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageAbout.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';

function PageAbout() {

    return (
        <main id="about">
            <section className='about'>
                <div className='about-me'>
                    <article className='about-article'>
                        <div>
                            <h3>About me </h3>
                            <p className='about-intro'> My name is Arash ,I am a qualified and professional web
                                developer recently graduated from
                                BCIT in Front-End Web Development
                                program. Currently working as Fashion photographer, with strong creative and
                                analytical skills, and with 7 years of
                                mechanical engineering work
                                experience, Team player with an eye for
                                detail.</p>
                        </div>
                        <div className='freetime'>
                            <h4> Being creative in my free time</h4>
                            <p className='freetime-intro'>In my free time I spend tons of times exploring arts, attending photography workshops, backcountry camping, travelling to explore historical artistic landscapes and etc.</p>
                        </div>

                    </article>

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
    );
}

export default PageAbout;