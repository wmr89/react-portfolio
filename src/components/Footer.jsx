import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark mt-auto text-white py-4">
      <div className="container">
        <ul className="list-unstyled d-flex justify-content-around mb-0">
          <li>
            <a href="https://github.com/wmr89" className="text-white text-decoration-none">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wmrankin/" className="text-white text-decoration-none">LinkedIn</a>
          </li>
          <li>
            <a href="https://stackexchange.com/users/30818272/wmr" className="text-white text-decoration-none">Stack Overflow</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;