import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body pt-4">
              <h2 className="card-title">About Me</h2>
              <img
                src="/images/react.svg"
                alt="Photo Photo"
                className="card-img-top mx-auto d-block"
                style={{ width: '150px', height: '150px' }}
              />
              <div className="card-text">
                <p>
                  I am a full-stack web developer and software engineer in the
                  process of completing the University of Utah Full-Stack
                  Coding Bootcamp. I have twelve years of experience as a
                  laboratory chemist and I am looking to change direction in
                  my career. My experience in chemistry and in pharmaceutical
                  R&D and manufacturing has given me practical skills that will
                  transition to my new career in web and software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;