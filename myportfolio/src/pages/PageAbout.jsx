// Import necessary libraries and styles
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './PageAbout.css';
import Navbar from '../components/Navbar';

function PageAbout() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch('/data/about.json')
            .then((response) => response.json())
            .then((data) => setContent(data));
    }, []);

    if (!content) return <div>Loading...</div>;
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
                                    <h3>{content.aboutMe.title}</h3>
                                    <div>
                                        <p className="about-intro">
                                            {content.aboutMe.intro}
                                        </p>
                                    </div>
                                    <div className="freetime">
                                        <h4>{content.aboutMe.freetimeTitle}</h4>
                                        <p className="freetime-intro">
                                            {content.aboutMe.freetimeIntro}
                                        </p>
                                    </div>
                                </article>
                            </div>

                            {/* WORK SECTION */}
                            <div className="work">
                                <article className="about-article">
                                    <h3>Work Experience</h3>

                                    {content.workExperience.map((job, index) => (
                                        <div key={index}>
                                            <h4>{job.title}</h4>
                                            <h5>{job.company} ({job.period})</h5>
                                            <ul>
                                                {job.responsibilities.map((responsibility, idx) => (
                                                    <li key={idx}>{responsibility}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </article>
                            </div>

                            {/* EDUCATION SECTION */}
                            <div className="education">
                                <article className="about-article">
                                    <h3>Education</h3>
                                    {content.education.map((edu, index) => (
                                        <div key={index}>
                                            <h4>{edu.school}</h4>
                                            <h5>{edu.period}</h5>
                                            <ul>
                                                <li >{edu.degree}</li>
                                            </ul>
                                        </div>
                                    ))}

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
