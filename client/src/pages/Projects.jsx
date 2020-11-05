import React from "react";
// import { Link } from "react-router-dom";
// import ProjectSection from "../components/ProjectsSection/ProjectSection";
import List from "../components/Projects/ProjectsCard";

const projects = [
  {
    projectTitle: "Toned Tribe",
    repoLink: "https://github.com/Napica/Toned-Tribe",
    appLink: "https://napica.github.io/Toned-Tribe/",
    tech: "HTML/CSS/JS/JQuery",
    description:
      "Toned Tribe aims to provide a service that helps people with fitness focused goals physically by connecting them with their local community and inspire by providing motivational thoughts. Through this all-in-one application, users will be able to find markets and in their desired area along with a random motivational quote to get them through the day.",
  },
  {
    projectTitle: "Budget Buddy",
    repoLink: "https://github.com/Napica/Budget-Buddy",
    appLink: "https://budget-buddy-buddy.herokuapp.com/",
    tech: "HTML/CSS/JS/MongoDB/PWA",
    description:
      "For the financially conscious user, the Budget-Buddy application is designed and targeted to help with budgeting whether the user is online or offline. It is a useful tool that lets the user track and see their budget any time they need to.",
  },
  {
    projectTitle: "Cryptic Encounters",
    repoLink: "https://github.com/Napica/Cryptic-Encounters",
    appLink: "hhttps://cryptic-encounters.herokuapp.com/",
    tech:
      "HTML/CSS(foundation)/JS/Express/Handlebars/JQuery/Sequelize/Node/MySQL",
    description:
      "This project is a walk-through of a haunted house in which the user can interact with the spirits inside in different ways to get different dialogue responses and therefore, a different version of the spirits' stories. The user finds themselves trapped in a haunted house, and is instructed by a greeter ghost to speak with each of the ghosts in the house before being allowed to leave. Each spirit has a story, and you have to help them tell their story and escape, or you'll become trapped too!",
  },
  {
    projectTitle: "A Note Taker",
    repoLink: "https://github.com/Napica/Note-Taker",
    appLink: "https://secure-savannah-70424.herokuapp.com/",
    tech: "HTML/CSS/JS//Node",
    description:
      "This project is designed to help a student, worker or anyone who just needs to take notes, be able to write, save, review and delete any information they would like to make.",
  },
  {
    projectTitle: "Burger on Burgers",
    repoLink: "https://github.com/Napica/Burgers-On-Burgers",
    appLink: "https://burgers-on-burgers-on-burgers.herokuapp.com/",
    tech: "HTML/CSS/JS/Express/Handlebars/Node",
    description:
      "This fun app will allow the users to create their own burgers, interact with their burgers by munching it down and digesting the burger.",
  },
  {
    projectTitle: "Workday Planner",
    repoLink: "https://github.com/Napica/Plan-The-Day",
    appLink: "https://napica.github.io/HW-05-Plan-The-Day/",
    tech: "HTML/CSS/JS/",
    description:
      "The purpose of this appliaction is to help catalog any important events, dates or information an employeed would need for the day. It helps structure the work day into hours so that the employee can plan their day accordingly. This will help the employee become more organized and increase productivity.",
  },
];
function FullProjectsSection() {
  return (
    <div>
      <div className="constainer">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>Welcome to my recent projects!</h1>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <List projects={projects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullProjectsSection;
