import React from 'react'import Skin from "./skin";
import fav from "./assets/favicon.ico";
import HeroBackground from "./assets/heroBackground.png";
import toolsTechSkilss from "./assets/toolsTechSkills.png";
import toolsBackground from "./assets/toolsBground.webp";
import gears from "./assets/gears.png";
import github from "./assets/github.webp";
import resume from "./assets/resumeBackground.png";
import linkedIn from "./assets/LI-In-Bug.png";
import Resume from "./assets/fullStackDeveloper.pdf";

const skin: Skin = {
  favicon: fav,
  siteName: "Xavier Rodriguez | Full Stack Developer",
  title: "Xavier Rodriguez",
  product: {
    title: "Full Stack Developer",
    description:
      "Hello, I'm Xavier, a seasoned Full Stack Developer with a keen focus on synthesizing creativity and efficiency in delivering robust solutions. My work ethos is characterized by a high degree of autonomy, as noted by senior colleagues. This autonomy manifests in my ability to work with minimal supervision, fostering a strong sense of ownership and responsibility. It not only leads to the generation of creative solutions but also significantly reduces managerial workload, thereby facilitating a focus on strategic planning and other high-level tasks. In addition to my autonomous working style, I thrive in collaborative team environments. My experience in team projects has reinforced my belief in the power of teamwork to foster rapid learning, spur innovation, and elevate overall product quality. I find great satisfaction in working alongside diverse teams to unravel complex problems, drawing from collective insights and expertise. I am actively seeking opportunities to join an organization that places a high value on teamwork and nurtures a culture of curiosity and creative problem-solving. Thank you for considering my portfolio. I am enthusiastic about the prospect of connecting with you and exploring how my skills and passions align with the vision of your team.",
    backgroundImage: HeroBackground,
    backgroundColor: "red",
  },
  tool: {
    tools: [
      {
        title: "JavaScript",
        description: "",
        icon: toolsTechSkilss,
        id: 1,
      },
      {
        title: "Node.js",
        description: "",
        icon: toolsTechSkilss,
        id: 2,
      },
      {
        title: "React",
        description: "",
        icon: toolsTechSkilss,
        id: 3,
      },
      {
        title: "Debugging",
        description: "",
        icon: toolsTechSkilss,
        id: 4,
      },
      {
        title: "AWS SST",
        description: "",
        icon: toolsTechSkilss,
        id: 5,
      },
      {
        title: "TypeScript",
        description: "",
        icon: toolsTechSkilss,
        id: 6,
      },
      {
        title: "HTML",
        description: "",
        icon: toolsTechSkilss,
        id: 7,
      },
      {
        title: "CSS",
        description: "",
        icon: toolsTechSkilss,
        id: 8,
      },
      {
        title: "Jest",
        description: "",
        icon: toolsTechSkilss,
        id: 9,
      },
      {
        title: "Vite",
        description: "",
        icon: toolsTechSkilss,
        id: 10,
      },
      {
        title: "Vitest",
        description: "",
        icon: toolsTechSkilss,
        id: 11,
      },
      {
        title: "Git",
        description: "",
        icon: toolsTechSkilss,
        id: 12,
      },
      {
        title: "Markdown",
        description: "",
        icon: toolsTechSkilss,
        id: 13,
      },
      {
        title: "GitHub",
        description: "",
        icon: toolsTechSkilss,
        id: 14,
      },
      {
        title: "Recoil",
        description: "",
        icon: toolsTechSkilss,
        id: 15,
      },
      {
        title: "Redux",
        description: "",
        icon: toolsTechSkilss,
        id: 16,
      },
      {
        title: "Express.js",
        description: "",
        icon: toolsTechSkilss,
        id: 17,
      },
      {
        title: "GraphQL",
        description: "",
        icon: toolsTechSkilss,
        id: 18,
      },
      {
        title: "MongoDB",
        description: "",
        icon: toolsTechSkilss,
        id: 19,
      },
      {
        title: "DynamoDB",
        description: "",
        icon: toolsTechSkilss,
        id: 20,
      },
      {
        title: "Puppeteer",
        description: "",
        icon: toolsTechSkilss,
        id: 21,
      },
      {
        title: "Electron.js",
        description: "",
        icon: toolsTechSkilss,
        id: 22,
      },
      {
        title: "ChatGPT Prompting",
        description: "",
        icon: toolsTechSkilss,
        id: 23,
      },
      {
        title: "Next.js",
        description: "",
        icon: toolsTechSkilss,
        id: 24,
      },
    ],
    backgroundImage: toolsBackground,
  },
  video: {
    videos: [
      {
        title: "Logicalis Private 5g in action.",
        videoId: "",
        description:
          "Private 5G presents enterprise clients with a cost-effective, adaptable, and simpler substitute for traditional wired networks. As a Cisco Global Gold Integrator partner, Logicalis stands as the evident selection to assist in the implementation, administration, and upkeep of your private 5G infrastructure.",
      },
    ],
    backgroundColor: "hsl(210, 100%, 20%)",
    backgroundImage: gears,
    fontColor: "#ffffff",
  },
  projects: {
    projects: [
      {
        title: "GitHub",
        description:
          "Visit my GitHub page to view my most recent repositories.",
        url: "https://github.com/Xavier-Julian-Rodriguez",
        backgroundImage: github,
        backgroundColor: "#f7f7f7!important",
        id: 1,
      },
      {
        title: "Resume",
        description: "View and download my Full Stack Developer resume.",
        url: Resume,
        backgroundImage: resume,
        backgroundColor: "#f7f7f7!important",
        id: 2,
      },
    ],
    backgroundColor: "#CE480A",
  },
  contact: {
    title: "Let's Connect.",
    description:
      "I am enthusiastic about the prospect of connecting with you and exploring how my skills and passions align with the vision of your team.",
    url: "mailto:xavierjulianrod@gmail.com",
    backgroundColor: "#69696a",
  },
  footer: {
    heading: "This site was created using Vite, React, and TypeScript.",
    description: `Checkout my portfolio repository to see how I seperated the logic into re-usable components. This landing page acts as a template so any user can modify the JSON object in index.ts to customize their app.`,
    fontColor: "#ffffff",
    backgroundColor: "#28282a",
    social: linkedIn,
    socialLink: "https://www.linkedin.com/in/xavierjulianrodriguez",
  },
};

export default skin;
