"use client";

import Card from "../Card/Card";
import { Element } from "react-scroll";

import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      key: 3,
      title: "Members Only Message Board",
      desc: "Currently only available in desktop view, this is a back-end app built with Express.js and PostgreSQL. It allows users to sign up, log in, and post messages to a members-only message board. User authentication is handled with Passport.js, and passwords are securely stored using encryption. By entering a secret code, users can become members or admins, gaining different permissions: non-members see posts anonymously, members can view authors and timestamps of posts, and admins can delete any messages.",
      stack: [
        { name: "Express.js", symbol: "./images/Express.svg" },
        { name: "PostgreSQL", symbol: "./images/Psql.svg" },
      ],
      demoLink: "https://uncomfortable-carole-chaviweisman-dec8d0ab.koyeb.app/",
      codeLink: "https://github.com/chavimiller/members-only",
    },
    {
      key: 5,
      title: "My Portfolio Website",
      desc: "My personal portfolio website, developed to showcase my front-end projects and growth as a developer. It was first built in React, then migrated to Next.js and TypeScript to take advantage of server-side rendering, better routing, and SEO optimization. It features a responsive design built with CSS Modules, smooth navigation, and a focus on performance and maintainability.",
      stack: [
        { name: "Next.js", symbol: "/images/Nextjs.svg" },
        { name: "TypeScript", symbol: "/images/Typescript.svg" },
      ],
      demoLink: "/",
      codeLink: "https://github.com/chavimiller/chavi-nextjs-portfolio",
    },
    {
      key: 1,
      title: "Shopping Cart",
      desc: "This shopping cart app was built with React. It shows a list of products from a mocked API, lets users add and remove items from the cart, and updates the cart's contents and total price in real time. It also handles navigation between a homepage, shop page, and cart page using React Router.",
      stack: [
        { name: "React", symbol: "/images/React.svg" },
        { name: "CSS", symbol: "/images/Css.svg" },
      ],
      demoLink: "https://coffee-website-cart.vercel.app/",
      codeLink: "https://github.com/chavimiller/shopping-cart",
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
            <h2 className={styles.projectsHeading}>Projects</h2>
            {projectList.map((project, index) => (
              <div key={project.key}>
                <Card
                  key={project.key}
                  title={project.title}
                  desc={project.desc}
                  stack={project.stack}
                  demoBtn={() => project.demoLink && openLink(project.demoLink)}
                  viewBtn={() => project.codeLink && openLink(project.codeLink)}
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
