import React, { useEffect, useState } from 'react';
import './PageHome.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import portraitImage from '../images/myportrait.jpg'; // Import your portrait image
import videoBg from '../assets/bg-movie.mp4'; // Import your video background
import { Helmet } from 'react-helmet';

<Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Unica+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
</Helmet>


function PageHome() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch('/data/home.json')
            .then((response) => response.json())
            .then((data) => setContent(data));
    }, []);

    if (!content) return <div>Loading...</div>; // Show loading state if content is not yet loaded

    return (
        <main>
            <Helmet>
                <title>Home | Portfolio</title>
                <meta name="description" content="Welcome to my portfolio" />
            </Helmet>
            <section id="home">
                <div className="bg-video">
                    <video src={videoBg} autoPlay loop muted playsInline />
                </div>
                <div className="greeting_message">
                    <div className="greeting_name">
                        <h1>{content.greeting.title}</h1>
                        <h2>{content.greeting.name}</h2>
                    </div>
                    <div className="fade-in">
                        <p>{content.greeting.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
                <h2>{content.skills.heading}</h2>
                <div className="skills-container">
                    {content.skills.categories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <ul>
                                {category.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="greetings">
                <div className="contact_me">
                    <h3>{content.contact.heading}</h3>
                    <div className="vertical-line"></div>
                    <div className="contact_content">
                        <p className="contact_text">{content.contact.text}</p>
                        <div className="socialmedia">
                            <a href={content.contact.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
      0 16 .513 16 1.146v13.708c0 .633-.526 
      1.146-1.175 1.146H1.175C.526 16 0 
      15.487 0 14.854V1.146zM4.943 
      12.248V6.169H2.542v6.079h2.401zm-1.2-7.013c.837 
      0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
      3.478 2.4 4.187c0 .694.521 1.248 
      1.327 1.248h.016zm4.908 
      7.013V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
      1.232-.878.869 0 1.216.662 
      1.216 1.634v2.719h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
      0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.542c.03.678 
      0 6.079 0 6.079h2.401z" />
                                </svg>
                            </a>
                            <a href={content.contact.socialLinks.github} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 
    2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
    1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
    0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
    0 0 .67-.21 2.2.82.64-.18 1.32-.27 
    2-.27s1.36.09 2 .27c1.53-1.04 
    2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
    1.27.82 2.15 0 3.07-1.87 3.75-3.65 
    3.95.29.25.54.73.54 1.48 0 1.07-.01 
    1.93-.01 2.2 0 .21.15.46.55.38A8.01 
    8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a className="email" href={content.contact.socialLinks.email} target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 
    2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 
    0v.217l6 3.6 6-3.6V4H2zm12 
    0.383l-5.684 3.41a1 1 0 0 1-1.032 
    0L2 4.383V12h12V4.383z"/>
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
