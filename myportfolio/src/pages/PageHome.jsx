import React, { useEffect } from 'react';
import './PageHome.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import portraitImage from '../images/myportrait.jpg'; // Import your portrait image
import videoBg from '../assets/bg-movie.mp4'; // Import your video background
import { Helmet } from 'react-helmet';

function PageHome() {

    useEffect(() => {
        const canvas = document.querySelector('.vanta-canvas');
    }, []);

    return (
        <main id="home">
            <title>Home | Portfolio</title>
            <meta name="description" content="Welcome to my portfolio" />
            <div className='bg-video'>
                <div className='overlay'></div>
                <video src={videoBg} autoPlay loop muted />
                <div className='greeting_box'>
                    {/* <img className="portrait" src={portraitImage} alt="my portrait" /> */}
                    <div className='greeting_message'>
                        <div className="greeting_name">
                            <h1>Hello, I'm</h1>
                            <h2>ARASH LAALI</h2>
                        </div>
                        <div className='fade-in'>
                            <p>Software Developer</p>
                            <p>currently based in Berlin, Germany</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <section className='skills'>
                <h2>Skills</h2>
                <div className='skills-container'>
                    {/* Core Technical Skills */}
                    <div className='skill-category'>
                        <h3>Core Technical Skills</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript ES6</li>
                        </ul>
                    </div>

                    {/* Framework and Libraries */}
                    <div className='skill-category'>
                        <h3>Framework & Libraries</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>jQuery</li>
                        </ul>
                    </div>

                    {/* Design & UX/UI Skills */}
                    <div className='skill-category'>
                        <h3>Design & UX/UI Skills</h3>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Figma</li>
                            <li>Adobe XD</li>
                        </ul>
                    </div>

                    {/* Build Tools and Version Controls */}
                    <div className='skill-category'>
                        <h3>Build Tools & Version Control</h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Vite</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className='greetings'>
                <div className='contact_me'>
                    <h3>Let's Chat</h3>
                    <div className='vertical-line'></div>
                    <div className='contact_content'>
                        <p className='contact_text'>
                            Please feel free to contact me via LinkedIn or Email. I’m always looking forward to an insightful conversation over coffee!
                            <span>☕</span>
                        </p>


                        <div className='socialmedia'>
                            <a href="https://www.linkedin.com/in/arash-laali-03746b31/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                            <a href="https://github.com/Arashlaali">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>
                            {/* Email SVG Icon */}
                            <a className="email" href="mailto:arash.laali@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0v8h12V4H2zm13.5 0l-6.5 4.5L2 4h12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PageHome;
