import React from "react";
import "./ProjectsCard.css"

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <div>
      {props.projects.map((item) => (
        <div className="text-center">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <button type="button" class="btn btn-lg btn-danger" disabled>
                    {item.projectTitle}
                  </button>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                  Tech used: {item.tech}
                </h6>
                <br/>
                <img className= "size" src={item.image}/>
                <br />
                <div className="text-center">
                  <p className="card-text">{item.description}</p>
                  <a href={item.appLink} className="card-link">
                    {item.projectTitle} Link
                  </a>
                  <a href={item.repoLink} className="card-link">
                    {item.projectTitle} Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
        
      ))}
    </div>
  );
}

export default List;
