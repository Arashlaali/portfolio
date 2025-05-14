import React, { useEffect, useState } from 'react';
import './PageHome.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import portraitImage from '../images/myportrait.jpg'; // Import your portrait image
import videoBg from '../assets/bg-movie.mp4'; // Import your video background
import { Helmet } from 'react-helmet';

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
                            <a href={content.contact.socialLinks.linkedin}>
                                {/* LinkedIn SVG Icon */}
                            </a>
                            <a href={content.contact.socialLinks.github}>
                                {/* GitHub SVG Icon */}
                            </a>
                            <a className="email" href={content.contact.socialLinks.email}>
                                {/* Email SVG Icon */}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PageHome;
