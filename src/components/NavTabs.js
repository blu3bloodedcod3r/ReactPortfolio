import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#mystory" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a href="#certificates" onClick={() => handlePageChange('Certificates')} className={currentPage === 'Certificates' ? 'nav-link active' : 'nav-link'}>
          Certificates
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
