// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import './PageHobbies.css';  // Import your custom CSS for styling
import Navbar from '../components/Navbar';


function PageHobbies() {

    return (
        <main id="hobbies">
            <div className='image-container'>
                <div className='container-individual'>
                    <div className='image-inner'>
                        <a href="">
                            <img src="../images/IMG_2734.jpg" alt="hiking on the mountains" />
                            <div className='image-title'>Hiking in the Rockie mountains</div>
                        </a>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default PageHobbies;
