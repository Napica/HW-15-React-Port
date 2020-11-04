import React from "react";
// import { Link } from "react-router-dom";


function Homepage() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-8 section-background">
          <div className="aboutme row diplay" id="aboutMe">
            <hr />
            {/* <div className="col-sm-6">
              <img
                src="./assets/images/Porfolio Images/Portfolio.jpg"
                className="img-fluid"
                alt="Portfolio Image"
              />
            </div> */}
            <div className="col-sm-6">
              <hr />
              <p>
                Greetings, salutations and felicitations! My name is Nathaniel!
                I am an aspiring web-developer with an eclecitic, creative
                sense. I have begun my new journey as a Full Stack web dev and I
                am excited to look to the future. As I continue my voyage, to
                look ahead is to find a better and more efficient way. I take
                pride in my personal and professional life in that the next
                adventure is always to be discovered.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
