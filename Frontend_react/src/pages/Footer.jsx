


import React from 'react'


function Footer() {

     // Styles for the footer
    const footerStyle = {
        backgroundColor: '#282c34',
        color: '#ffffff',
        textAlign: 'center',
        padding: '10px 0',
        marginTop: '2px',
        bottom: '0',
        left: '0',
        right:'0',
        zIndex: '10',
        // position: 'fixed'
    };
    
    const contentStyle = {
        width: '100vw',
    };
    
    const iconContainerStyle = {
        marginTop: '10px',
    };
    
    const iconStyle = {
        margin: '0 10px',
        color: '#ffffff',
        fontSize: '20px',
        textDecoration: 'none',
    };

    return (
        

        <footer style={footerStyle}>
            <div style={contentStyle}>
                <p>© 2024 Note<sup><u>Book</u></sup>  by Sujan Rai. All Rights Reserved.</p>
                <div style={iconContainerStyle}>
                        {/* Social Media Links */}
                        <a href="https://www.facebook.com/sujan.rai.92202/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.sujan140.com.np" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <i className="bi bi-globe2"></i>
                        </a>
                        <a href="https://www.instagram.com/sujan_rai_426/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://github.com/Sujan-Rai-426" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                            <i className="bi bi-github"></i>
                        </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer