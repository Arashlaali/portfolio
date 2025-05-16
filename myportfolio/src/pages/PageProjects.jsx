import React, { useState, useEffect } from 'react';
import './PageProjects.css';
import Navbar from '../components/Navbar';

import movieImage from '../images/movie.png';
import wackaMoleImage from '../images/wackamole.jpg';
import fotografieImage from '../images/fotografie.jpg';

// Map image filenames to imported images
const imageMap = {
    'movie.png': movieImage,
    'wackamole.jpg': wackaMoleImage,
    'fotografie.jpg': fotografieImage
};

function PageProjects() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((response) => response.json())
            .then((data) => setContent(data));
    }, []);

    if (!content) return <div>Loading...</div>;

    return (
        <main id="projects">
            <title>{content.pageTitle}</title>
            <meta name="description" content={content.metaDescription} />
            <div id='container'>
                <div className='projects-title'>
                    <p></p>
                    <p>{content.sectionTitle}</p>
                </div>
                <div id='portfolio'>
                    <div className='projects-flex'>
                        {content.projects.map((project, index) => (
                            <React.Fragment key={index}>
                                <div className='projects-individual'>
                                    <a href={project.url} target='_blank' rel='noopener noreferrer'>
                                        <img
                                            className="project-image"
                                            src={imageMap[project.image]}
                                            alt={project.title}
                                        />
                                    </a>
                                </div>
                                <div className={`projects-bio ${index === 0 ? 'first-project' : index === content.projects.length - 1 ? 'last-project' : ''}`}>
                                    <h2>{project.title}</h2>
                                    <ul>
                                        {project.techStack.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                    <article className='project-bio'>
                                        {project.description}
                                    </article>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PageProjects;
