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
                        <h3>About me </h3>
                        <div>
                            <p className='about-intro'> My name is Arash , ....</p>
                        </div>
                        <div className='freetime'>
                            <h3> Being creative in my free time</h3>
                            <p className='freetime-intro'>In my free time I spend tons of times exploring arts, attending photography workshops, backcountry camping, travelling to explore historical artistic landscapes and etc.</p>
                        </div>

                    </article>

                    <div className='work-education'>
                        <article className='about-article'>
                            <h3> Work Experience</h3>
                            <div>
                                <h4> Olympic Controls</h4>
                                <ul>
                                    <li> Sales Engineer</li>
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