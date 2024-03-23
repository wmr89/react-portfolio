function Portfolio(props) {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Portfolio</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/*map projects with an idex as the key, for each project  the HTML below will be added*/}
        {props.projects.map((project, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href={project.link}>{project.title}</a>
                </h5>
                <p className="card-text">{project.description}</p>
                <p>
                  <a href={project.github}>See the Repo</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
