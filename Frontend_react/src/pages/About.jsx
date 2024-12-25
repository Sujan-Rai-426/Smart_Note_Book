

import React from 'react'
import '../styles/About.css'

function About() {
    return (
        
    <div className="container">
        <h1 className="heading">About Smart Note Book</h1>
        <p className="paragraph">
            Welcome to <strong>Smart Note Book</strong>, your personal note-taking application! 
            This platform allows you to register, log in, and manage your notes efficiently. 
            Whether you want to jot down quick thoughts or organize detailed notes, 
            Smart Note Book has got you covered.
        </p>
        <h2 className="subheading">Key Features</h2>
        <ul className="list">
            <li>📝 Create and manage your personal notes.</li>
            <li>🔐 Secure registration and login system.</li>
            <li>📂 Access your notes anytime, anywhere.</li>
        </ul>
        <p className="paragraph">
            Get started today and take your productivity to the next level!
        </p>
    </div>
    );
};


export default About