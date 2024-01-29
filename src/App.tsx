// src/App.tsx

import React from 'react';
import Footer from './Footer';
import './App.css';

const App: React.FC = () => {

  const copyrightText = '© 2024 Your Company. All rights reserved.';

  const showLogo = true;
  const logoSrc = 'https://example.com/path/to/your/logo.png';

  const  links = [
    { url: '/home', text: 'Home' },
    { url: '/about', text: 'About' },
    { url: '/contact', text: 'Contact' },
  ];

  const socialMediaLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/yourcompany', icon: '/path/to/facebook-icon.png' },
    { name: 'Twitter', url: 'https://twitter.com/yourcompany', icon: '/path/to/twitter-icon.png' },
    { name: 'Google', url: 'https://www.google.com', icon: '/path/to/google-icon.png' }, // Added Google
  ];

  return (
    <div className="container">
      <h1>Your React App</h1>
      {/* Lokesh Patil */}
      <Footer
        copyrightText={copyrightText}
        showLogo={showLogo}
        logoSrc={logoSrc}
        socialMediaLinks={socialMediaLinks}
        links={links}
        footerLogoStyle="footerStyle"
        copyrightTextStyle="copyrightTextStyle"
        />
    </div>
  );
};

export default App;
