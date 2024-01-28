import { useState } from 'react';
import NavTabs from './NavTabs';
import ContactPage from '../pages/ContactPage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutPage');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'AboutPage') {
        return <AboutPage />;
      }
      if (currentPage === 'PortfolioPage') {
        return <PortfolioPage />;
      }
      if (currentPage === 'ContactPage') {
        return <ContactPage />;
      }
      if (currentPage === 'ResumePage') {
        return <ResumePage />;
      }
      return <AboutPage />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        <main className="mx-3">{renderPage()}</main>
      </div>
    );
  }
  