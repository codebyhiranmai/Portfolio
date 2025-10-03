import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import App from "../App";
import frontendIcon from "../assets/front-end.png";
import toolsIcon from "../assets/tools.png";
import softskillsIcon from "../assets/softskills.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendIcon,
    skills: [
      { skill: "HTML5", percentage: "85%" },
      { skill: "CSS3", percentage: "80%" },
      { skill: "Javascript", percentage: "70%" },
      { skill: "React.js", percentage: "50%" },
    ],
  },
  {
    title: "Tools",
    icon: toolsIcon,
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softskillsIcon,
    skills: [
      { skill: "Problem Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "75%" },
      { skill: "Attention to detail", percentage: "70%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio page",
    skills_used: "React, HTML, CSS",
    about: [
      "Built a fully responsive and interactive portfolio using React for component-based architecture, ensuring smooth UI updates and better code reusability.",
      "Used  modular CSS for styling individual components, enhancing maintainability and scalability.",
      "A smooth navigation experience between sections is created.",
    ],
  },
  {
    title: "Responsive Ecommerce Website - MYRA",
    skills_used: "HTML, CSS, JavaScript",
    about: [
      "Linked multiple HTML pages to create a seamless experience with dynamic navigation.",
      "Styled the interface with CSS to ensure a visually appealing and friendly layout.",
      "Optimized the website for cross browser compatability and mobile responsiveness.",
    ],
  },
  {
    title: "Amazon Homepage Clone",
    skills_used: "HTML, CSS",
    about: [
      "Developed a static version of the Amazon homepage, focusing on layout and UI elements.",
      "Implemented key features such as navigation bar, product listings, and footer and designed it to be fully responsive across devices using media queries.",
      "Gained hands-on experience with CSS for styling and layout management.",
    ],
  },
];
