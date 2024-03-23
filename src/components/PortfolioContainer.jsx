import { useState } from 'react';
{/*import each page needed*/}
import Navbar from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import projects from '../projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
{/*add conditions for rendering the page that matches 'current page', about set as default page*/}
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
