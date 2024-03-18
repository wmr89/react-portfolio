import { useState } from 'react';

import Navbar from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import projects from '../projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio projects={projects}/>;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
          }
        return <About/>;
      };

      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
          <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          <main className="mx-3">
            {renderPage()}
          </main>
        </div>
      );





}
