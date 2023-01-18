import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import Certificates from './Certficates';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }
    if (currentPage === 'Certificates') {
      return <Certificates />;
    }
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}