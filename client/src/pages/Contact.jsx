import React from "react";
// import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      {/* <h1>This is the contacts page</h1> */}
      <div className="container">
        <h1 className="text-center">Contact</h1>
        <hr />
        <div className="Row">
          <div className ="col-sm-6">
            <h5>Links:</h5>
            <ul>
              <li>
                <a href="https://github.com/Napica">Git Hub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nathaniel-calle-80164a79/">
                  LinkedIn
                </a>
              </li>
            </ul>
            <h5>Contact Info:</h5>
            <ul>
              <li>Email: Nathapcal@gmail.com</li>
              <li>Phone: 770-335-4645</li>
            </ul>
            <h5>Resume:</h5>
            <ul>
              <li>
                <a href="https://docs.google.com/document/d/1nNQ3LjNC3n6S0EB9Nnq1ASqd5h6Jc4xhNUeZJ_oaRs4/edit?usp=sharing">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
