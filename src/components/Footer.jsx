import React from 'react';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{textAlign: "center"}}> 
      <p>Build with the use of NASA's Astronomy Picture of the Day API service.</p>
      <p>Created by Daryl Nauman</p>
      <p>Copyright &#169; {currentYear}</p>
    </footer>
  );
}

export default Footer;