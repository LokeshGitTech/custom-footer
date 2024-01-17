// src/Footer.tsx

import React from 'react';
import './Footer.css';

interface Link {
  url: string;
  text: string;
}


interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

interface FooterProps {
  copyrightText: string;
  copyrightTextStyle?: string;
  showLogo: boolean;
  logoSrc: string;
  socialMediaLinks: SocialMediaLink[];
  links: Link[]
  footerLogoStyle?: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText, copyrightTextStyle, showLogo, logoSrc, socialMediaLinks, links, footerLogoStyle }) => {
  let footerLogoStringStyle;
  let footerLogoInlineStyle;

  if (typeof footerLogoStyle === "string") {
    footerLogoStringStyle = footerLogoStyle;
  } else {
    footerLogoInlineStyle = footerLogoStyle;
  }

  return (
    <footer>
      <div className="footer-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.text}</a></li>
          ))}
        </ul>
      </div>
      {showLogo && <img src={logoSrc} alt="Company Logo" style={footerLogoInlineStyle} className={footerLogoStringStyle || 'footer-logo'} />}Centrum Menopause
      <p className={copyrightTextStyle || "copyright-text"}>{copyrightText}</p>
      <div className="social-media-links">
        {socialMediaLinks.map((socialMedia, index) => (
          <a key={index} href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            <img src={socialMedia.icon} alt={socialMedia.name} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
