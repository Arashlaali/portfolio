// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageHobbies.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';
import hikingImage from '../images/hiking.png'; // Import your hiking image
import campingImage from '../images/camping.jpg'; // Import your camping image
import burnerImage from '../images/burner.jpg'; // Import your burner image
import peakImage from '../images/peak.jpg'; // Import your peak image
import highAttitudeImage from '../images/highattitude.jpg'; // Import your high altitude image

function PageHobbies() {

    return (
        <main id="hobbies">
            <div className='image-container'>
                <div className='container-individual'>
                    <div className='image-inner'>
                        <img src={hikingImage} alt="hiking on the mountains" />
                        <div className='image-title'>Hiking in the Rockie mountains</div>
                    </div>
                    <div className='image-inner'>
                        <img src={campingImage} alt="camping on the mountains" />
                        <div className='image-title'>Camping over the glacier</div>
                    </div>
                    <div className='image-inner'>
                        <img src={burnerImage} alt="burner in the dust" />
                        <div className='image-title'>Burner in the Dust</div>
                    </div>
                    <div className='image-inner'>
                        <img src={peakImage} alt="burner in the dust" />
                        <div className='image-title'>Peak of the Kolakchal mountain</div>
                    </div>
                    <div className='image-inner'>
                        <img src={highAttitudeImage} alt="burner in the dust" />
                        <div className='image-title'> Last few steps before the peak</div>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default PageHobbies;
