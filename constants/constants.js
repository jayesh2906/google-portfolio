import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { calculateExperience } from "../helpers/getExperience";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export const accountDetails = {
  account: "Google Account",
  name: "Jayesh Choudhary",
  gmail: "jayesh.choudhary2906@gmail.com",
};

export const navBar = [
  {
    name: "All",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const info = {
  heading: "Jayesh Choudhary: Software Engineer",
  mobileHeading: "Jayesh Choudhary",
  description:
    "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
  workExperience: "Work Experience",
  designation: "Software Engineer",
  company: "Mindtree Private Limited",
  timePeriod: "03/2021 - Present",
  workProjects: [
    {
      title: "DHRE RealConnect (01/02/2022 - Present) :",
      description:
        "Currently, Working on a live project from scratch as a React Js Frontend developer.",
    },
    {
      title: "Informa DNA (01/07/2021 - 31/01/2022) :",
      description:
        "Worked with mentioned technologies : React Js, Redux-saga, Redux-toolkit, SASS, Material Ui, axios, ag-grid-react, formik and yup. Mainly worked on the Logical part of frontend like API integration, Implementation of new features, Reusable components, Bug fixes using React Js, JavaScript and SASS.",
    },
  ],
};

export const sideBarInfo = {
  about:
    "A Detailed oriented and Committed Engineering Professional with a Bachelor of Engineering in Information Technology. Well-versed in writing code to create systems that are reliable and user-friendly.",

  contactDetails: [
    {
      title: "jayesh.choudhary2906@gmail.com",
      href: "mailto:jayesh.choudhary2906@gmail.com",
      icon: GrMail,
    },
    {
      title: "8329812727",
      href: "",
      icon: BsFillPhoneFill,
    },
    {
      title: "Google Portfolio link",
      href: "https://google-portfolio.vercel.app/",
      icon: AiFillGoogleCircle,
    },
    {
      title: "Portfolio link",
      href: "https://jayesh2906.github.io",
      icon: BiLinkAlt,
    },
    {
      title: "Linkedin Profile",
      href: "https://www.linkedin.com/in/jayesh-choudhary-72444518b/",
      icon: FaLinkedin,
    },
    {
      title: "Github Profile",
      href: "https://github.com/jayesh2906",
      icon: AiFillGithub,
    },
    {
      title: "Twitter Profile",
      href: "https://twitter.com/JayeshMERN",
      icon: AiFillTwitterCircle,
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Jayesh have?",
    answer: `Jayesh is well-versed in Javascript, React Js, Redux, CSS 3, HTML 5, Tailwind, Next Js, React Native, Node Js, Express Js, MongoDb.`,
  },
  {
    question: "What services does Jayesh provide?",
    answer: `Jayesh provides fully responsive frontend application with React Js, Full-stack aplication with MERN and Backend services with Node Js.`,
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
    image: `/assets/laptopdesign.png`,
    date: `1-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/`,
  },
  {
    heading: "House Design with pure CSS [2022].",
    platform: `Linkedin.`,
    author: `Jayesh Choudhary`,
    image: `/assets/housedesign.png`,
    date: `12-Jan-2022`,
    link: `https://www.linkedin.com/posts/jayesh-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d`,
  },
  {
    heading: "IPL-2022 Web Application using React Js.",
    platform: `Linkedin.`,
    author: `Jayesh Choudhary`,
    image: `/assets/ipl2022.png`,
    date: `26-Mar-2022`,
    link: `https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/`,
  },
];

export const relatedsearch = [
  {
    text: "Jayesh's Skills",
    href: "/skills",
  },
  {
    text: "Jayesh's Projects",
    href: "/projects",
  },
  {
    text: "Contact Jayesh",
    href: "/contact",
  },
  {
    text: "Jayesh's Location",
    href: "/map",
  },
];

export const footerData = {
  name: "JayeshChoudhary",
  year: "2022",
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/jayesh-choudhary-72444518b/",
      icon: FaLinkedin,
    },
    {
      href: "https://jayesh2906.github.io",
      icon: BiLinkAlt,
    },
    {
      href: "https://github.com/jayesh2906",
      icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/insta__jc/",
      icon: FaInstagram,
    },
    {
      href: "https://twitter.com/JayeshMERN",
      icon: FaTwitterSquare,
    },
  ],
};

export const skillsData = {
  info: "Jayesh loves to develop innovative web apps using new technologies, He is keen to gain experience, enhance and upgrade his skills, He enjoys building everything from small sites and landing pages to rich interactive web apps. He loves creating visually stunning, unique and responsive web apps.",
  skills: [
    {
      title: "Frontend Skills",
      description:
        "JavaScript, React Js, Redux, React Native, Next Js, Html5, CSS3,Tailwind Css, Material Ui, Bootstrap5, Sass and Styled Component.",
    },
    {
      title: "Backend Skills",
      description:
        "Node Js, Express Js, Mongo Db, Next Js, Postman and Jwt-Authentication.",
    },
  ],
  skillsIcons: [
    {
      title: "React Js",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "Redux",
      href: "https://redux.js.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      shadowColor: "#9B59B6",
    },
    {
      title: "Css 3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
    },
    {
      title: "Next Js",
      href: "https://nextjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Html 5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    {
      title: "Tailwind Css",
      href: "https://tailwindcss.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      shadowColor: "#38bdf8",
    },
    {
      title: "Material Ui",
      href: "https://mui.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      shadowColor: "#1C7FB6",
    },
    {
      title: "Bootstrap 5",
      href: "https://getbootstrap.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      shadowColor: "#7C12F8",
    },
    {
      title: "Sass",
      href: "https://sass-lang.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      shadowColor: "#CB6699",
    },
    {
      title: "Node Js",
      href: "https://nodejs.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      shadowColor: "#83CD29",
    },
    {
      title: "Express Js",
      href: "https://expressjs.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "Mongo Db",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      shadowColor: "#007ACC",
    },
  ],
};

export const projectsData = [
  {
    title: "Laptop with React Js and Tailwind CSS",
    image: "/assets/laptopdesign.png",
    description: [
      "Implemented a laptop with Power on, Sign In with password or finger scanner, Restart, Sleep and Shut down functionality using React and Tailwind CSS.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:6904281486057373696/",
    liveDemo: "https://jayesh2906.github.io/laptop-design/",
    sourceCode: "https://github.com/jayesh2906/laptop-design",
  },
  {
    title: "House Design with CSS",
    image: "/assets/housedesign.png",
    description: [
      "Designed front-view of my house with pure CSS 3, Html 5 and JavaScript(for handlingevents).",
      "User can open and close Gate, Windows and Slide of a House, User can also rotate a house in 360°.",
    ],
    videoDemo:
      "https://www.linkedin.com/posts/jayesh-choudhary-72444518b_css-animation-perspective3d-activity-6886298154199773184-C74d",
    liveDemo: "https://jayesh2906.github.io/My-house.github.io/house.html",
    sourceCode: "https://github.com/jayesh2906/My-house.github.io",
  },
  {
    title: "IPL-2022 Web Application",
    image: "/assets/ipl2022.png",
    description: [
      "Implemented a WebApp that provides the live scorecard of IPL-2022 fetched from RESTful cricket API.",
      "User can create his/her playing 11 team for each franchise, User can also watch the best of IPL highlights.",
      "onverted to PWA that can be installed and run on mobile as a native app.",
      "Deployed it to Netlify.",
      "Technologies used: JavaScript, React, CSS 3, Material Ui, Local Storage.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6913334580070498304/",
    liveDemo: "https://ipl-2022.netlify.app/",
    sourceCode: "https://github.com/jayesh2906/IPL-2022-App",
  },
  {
    title: "Full E-Commerce Web Application",
    image: "/assets/iconstore.png",
    description: [
      "Implemented a Full E-Commerce WebApp with MERN Stack which can be used by users, sellers, and Admin.",
      "Uses json web token for security, Authorization.",
      "Uses Geo-location for auto-filling shipping address of user.",
      "Uses Twilio message notification to registered mobile number on confirmation of orders.",
      "Uses Paypal payment gateway integration for demo virtual payment of orders.",
      "Technologies used: JavaScript, React, Redux Thunk, Node Js, Expess Js, Html, CSS, Bootstrap 5, MongoDB.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842941644195672064/",
    liveDemo: "",
    sourceCode: "https://github.com/jayesh2906/Final-Ecommerce-Project",
  },
  {
    title: "Ice Mart Mobile Application",
    image: "/assets/icemart.png",
    description: [
      "Implemented an Ice Mart Mobile App with MERNN Stack which can be used by users, and Admin.",
      "Uses json web token for security, Authorization.",
      "Uses Google-maps for location of user.",
      "Uses Google pay payment gateway integration for demo virtual payment of orders.",
      "Technologies used: JavaScript, React Native, Redux Toolkit, Node Js, Expess Js, MongoDB.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6941967333682737152/",
    liveDemo: "",
    sourceCode: "https://github.com/jayesh2906/Ice-Mart",
  },
  {
    title: "Real-time Online Chat Application",
    image: "/assets/chatapp.png",
    description: [
      "Implemented a Real-time Online Chat Application with react and stream that can be used for online communication.",
      "Server deployed to Heroku and Client deployed to Netlify.",
      "Responsive and converted into PWA(Native app).",
      "Technologies used: JavaScript, React, Stream, Node Js, Expess Js, Html, CSS.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6877141876273762304/",
    liveDemo: "",
    sourceCode: "https://github.com/jayesh2906/Lets-Chat-app",
  },
  {
    title: "Movie Info Application",
    image: "/assets/movieapp.png",
    description: [
      "Implemented a Movie info app with MERN Stack with third-party APIs for fetching movies record.",
      "Uses OMDb RESTful web service.",
      "Technologies used: JavaScript, React, Node Js, Expess Js, Html, CSS, Bootstrap 5.",
      "Database used: MongoDB.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842939354764201984/",
    liveDemo: "",
    sourceCode: "",
  },
];
