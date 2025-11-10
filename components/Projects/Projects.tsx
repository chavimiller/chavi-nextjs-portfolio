"use client";

import Card from "../Card/Card";
import { Element } from "react-scroll";

import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      key: 1,
      title: "Shopping Cart",
      desc: "This shopping cart app was built with React, and is currently only available for desktop-view. It shows a list of products from a mocked API, lets users add and remove items from the cart, and updates the cart's contents and total price in real time. It also has navigation between a homepage, shop page, and cart page using React Router.",
      stack: [
        { name: "React", symbol: "/images/React.svg" },
        { name: "CSS", symbol: "/images/Css.svg" },
      ],
      demoLink: "https://coffee-website-cart.vercel.app/",
      codeLink: "https://github.com/chavimiller/shopping-cart",
    },
    {
      key: 2,
      title: "Calculator",
      desc: "This simple, responsive calculator app was built using JavaScript and lets you perform basic math operations like addition, subtraction, multiplication, and division. It handles decimals, clearing, deleting digits, and updates the display in real time as you click.",
      stack: [
        { name: "JavaScript", symbol: "/images/Javascript.svg" },
        { name: "HTML", symbol: "/images/Html.svg" },
        { name: "CSS", symbol: "/images/Css.svg" },
      ],
      demoLink: "https://chavimiller.github.io/calculator-project/",
      codeLink: "https://github.com/chavimiller/calculator-project",
    },

    {
      key: 3,
      title: "Weather App",
      desc: "This app was built with JavaScript, HTML, and CSS, using a modular approach to keep the code clean and components separate. It fetches real-time weather data from an external API, allowing users to search for any city and view current temperature, weather conditions, and other details. Currently it has basic responsiveness and being migrated into a React project.",
      stack: [
        { name: "JavaScript", symbol: "/images/Javascript.svg" },
        { name: "HTML", symbol: "/images/Html.svg" },
        { name: "CSS", symbol: "/images/Css.svg" },
        { name: "Webpack", symbol: "/images/Webpack.svg" },
      ],
      demoLink: "https://chavimiller.github.io/weather-app/",
      codeLink: "https://github.com/chavimiller/weather-app",
    },
    {
      key: 4,
      title: "To-Do List",
      desc: "Currently only available for desktop-view, this to-do list app is divided into modules to make the code easier to follow and maintain. It demonstrates handling events, updating the interface dynamically, manipulating the DOM, and saving tasks to local storage so they remain after page refreshes.",
      stack: [
        { name: "JavaScript", symbol: "/images/Javascript.svg" },
        { name: "HTML", symbol: "/images/Html.svg" },
        { name: "CSS", symbol: "/images/Css.svg" },
        { name: "Webpack", symbol: "/images/Webpack.svg" },
      ],
      demoLink: "https://chavimiller.github.io/to-do-list/",
      codeLink: "https://github.com/chavimiller/to-do-list",
    },
  ];

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Element name="portfolio">
        <div className={styles.projectSection}>
          <div className="section container">
            <div className={styles.projectsHeading}>Projects</div>
            {projectList.map((project, index) => (
              <div key={project.key}>
                <Card
                  key={project.key}
                  title={project.title}
                  desc={project.desc}
                  stack={project.stack}
                  demoBtn={() => openLink(project.demoLink)}
                  viewBtn={() => openLink(project.codeLink)}
                />
                {index !== projectList.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </>
  );
};

export default Projects;
