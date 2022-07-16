import { calculateExperience } from "../helpers/getExperience";

export const accordionData = [
  {
    question: "What skills does Jayesh have?",
    answer: `Jayesh is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind, Next Js, React Native, Node Js, Express Js, MongoDb.`,
  },
  {
    question: "What services does Jayesh provide?",
    answer: `Jayesh provides frontend fully responsive application with React Js, Full-stack aplication with MERN and Backend services with Node Js.`,
  },
  {
    question: "Is Jayesh frontend or backend developer?",
    answer: `Jayesh is a full stack web developer, Experienced in developing full stack MERN apllications.`,
  },
  {
    question: "How much experience does Jayesh have?",
    answer: `Jayesh has ${calculateExperience()} of experience in software industry.`,
  },
];

export const projectVideos = [
  {
    heading: "Mini Laptop Implementation using React Js.",
    platform: `Linkedin.`,
    author: `Jayesh Choudhary`,
    image: `/laptopdesign.png`,
    date: `1-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/`,
  },
  {
    heading: "House Design with pure CSS [2022].",
    platform: `Linkedin.`,
    author: `Jayesh Choudhary`,
    image: `/housedesign.png`,
    date: `12-Jan-2022`,
    link: `https://www.linkedin.com/posts/jayesh-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d`,
  },
  {
    heading: "IPL-2022 Web Application using React Js.",
    platform: `Linkedin.`,
    author: `Jayesh Choudhary`,
    image: `/ipl2022.png`,
    date: `26-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/`,
  },
];
