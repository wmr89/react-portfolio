function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {props.projects.map((project, index)=> (
          <li key={index}>{`${project.title}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;