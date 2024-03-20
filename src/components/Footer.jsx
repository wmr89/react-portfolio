import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark mt-auto text-white py-4">
      <div className="container">
        <ul className="list-unstyled d-flex justify-content-around mb-0">
          <li>
            <a href="https://github.com/wmr89" className="text-white text-decoration-none">Github</a> {/* Added text-decoration-none class */}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/wmrankin/" className="text-white text-decoration-none">LinkedIn</a> {/* Added text-decoration-none class */}
          </li>
          <li>
            <a href="https://stackexchange.com/users/30818272/wmr" className="text-white text-decoration-none">Stack Overflow</a> {/* Added text-decoration-none class */}
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;