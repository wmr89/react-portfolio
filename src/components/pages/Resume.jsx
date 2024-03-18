import React from "react";

function Resume() {
  return (
    <div className="column justify-content-center">
      <div>
        <h3>Skills</h3>
        <div className="d-flex justify-content-around flex-wrap">
          <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>
          <ul className="list-unstyled">
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
          <ul className="list-unstyled">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

      <div className="column justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="text-center">Resume</h2>
          <a href="/images/CV_William_Rankin.pdf" download>
            <button className="btn btn-primary mt-3">Download Resume</button>
          </a>
        </div>
        <div className="col-md-6 text-center mt-3">
          <embed
            src="/images/CV_William_Rankin.pdf"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
