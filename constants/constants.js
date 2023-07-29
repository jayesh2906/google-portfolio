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
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const accountDetails = {
  account: "Google Account",
  name: "Jayesh Choudhary",
  gmail: "jayesh.choudhary2906@gmail.com",
};

export const navBar = [
  {
    name: "About",
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
  companies: [
    {
      designation: "Software Engineer",
      name: "Microsoft",
      timePeriod: "04/2023 - Present",
      workProjects: [
        {
          title: "Mix Dialog :",
          description:
            "Developing conversational AI chatbots tool as a <b>Frontend/UI Developer</b>.",
        },
      ],
    },
    {
      designation: "Software Engineer",
      name: "LTIMindtree",
      timePeriod: "03/2021 - 04/2023",
      workProjects: [
        {
          title: "DHRE RealConnect :",
          description:
            "Developed a web application for Dubai Holding Real Estate from scratch as a frontend developer, Technologies used : <b>React Js</b>, <b>Redux-thunk</b>, <b>Tailwind CSS</b>, <b>Axios</b>, <b>React-hook-form</b> and <b>Yup</b>.",
        },
        {
          title: "Informa Pharma Intelligence :",
          description:
            "Responsible for the logical part of frontend development such as API integration, Implementation of new features, Reusable components, and Bug fixes, Technologies used : <b>React Js</b>, <b>Redux-saga</b>, <b>Redux-toolkit</b>, <b>Sass</b>, <b>Material Ui</b>, <b>Axios</b>, <b>Ag-grid-react</b>, <b>Formik</b> and <b>Yup</b>.",
        },
      ],
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
      title: "Portfolio link",
      href: "https://jayesh2906.github.io",
      icon: BiLinkAlt,
    },
    {
      title: "Google Portfolio link",
      href: "https://google-portfolio.vercel.app/",
      icon: AiFillGoogleCircle,
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
    answer: `Jayesh provides fully responsive frontend applications with React Js, Full-stack aplications with MERN and Backend services with Node Js.`,
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
    date: `10-Jan-2022`,
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
  year: new Date().getFullYear(),
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
        "Node Js, Express Js, Mongo Db, Next Js, Postman and Jwt-Authorization.",
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
      title: "React Native",
      href: "https://reactnative.dev/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
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
    {
      title: "Styled Components",
      href: "https://styled-components.com/",
      src: "/assets/styledComponents.png",
      shadowColor: "#CB6699",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/postman.png",
      shadowColor: "#f97316",
    },
  ],
};

export const projectsData = [
  {
    title: "Laptop with React Js and Tailwind CSS",
    image: "/assets/laptopdesign.png",
    description: [
      "Designed and developed a laptop with Power on, Sign In with password or finger scanner, Restart, Sleep and Shut down functionality using <b>React JS</b> and <b>Tailwind CSS</b>.",
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
      "Designed and developed front-view of my house with pure <b>CSS 3</b>, <b>Html 5</b> and <b>JavaScript</b>.",
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
      "Designed and developed a web application that provides the live scorecard of IPL-2022 fetched from <b>RESTful Cricket API</b>.",
      "User can create his/her playing 11 team for each franchise, User can also watch the best of IPL highlights.",
      "Converted to PWA that can be installed and run on mobile as a native app.",
      "Deployed it to Netlify.",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>CSS 3</b>, <b>Material Ui</b>, <b>Local Storage</b>.",
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
      "Designed and developed a Full E-Commerce web application with MERN Stack that can be used by users, sellers, and Admin.",
      "Uses json web token for security ( Authorization ), Uses Geo-location for auto-filling shipping address of user.",
      "Uses Twilio message notification to registered mobile number on confirmation of orders.",
      "Uses Paypal payment gateway integration for demo virtual payment of orders.",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Redux Thunk</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>, <b>Bootstrap 5</b>, <b>MongoDB</b>.",
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
      "Designed and developed an Ice Mart Mobile App with MERNN Stack that can be used by users, and Admin.",
      "Uses json web token for security, Authorization.",
      "Uses Google-maps for location of user.",
      "Uses Google pay payment gateway integration for demo virtual payment of orders.",
      "Technologies used: <b>JavaScript</b>, <b>React Native</b>, <b>Redux Toolkit</b>, <b>Node Js</b>, <b>Express Js</b>, <b>MongoDB</b>.",
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
      "Designed and developed a Real-time Online Chat Application with react and stream that can be used for online communication.",
      "Server deployed to Heroku and Client deployed to Netlify.",
      "Responsive and converted into PWA(Native app).",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Stream</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>.",
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
      "Designed and developed a Movie info app with MERN Stack with third-party APIs for fetching movies record, Uses <b>OMDb RESTful</b> web service.",
      "Technologies used: <b>JavaScript</b>, <b>React JS</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Html</b>, <b>CSS</b>, <b>Bootstrap 5</b>, <b>MongoDB</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6842939354764201984/",
    liveDemo: "",
    sourceCode: "",
  },
  {
    title: "All Projects Compilation",
    image: "/assets/allProjects.png",
    description: [
      "Check here my all projects in one video compilation.",
      "Technologies used: <b>JavaScript</b>, <b>React Js</b>, <b>Redux</b>, <b>React Native</b>, <b>Next Js</b>, <b>Html5</b>, <b>CSS3</b>, <b>Tailwind Css</b>, <b>Material Ui</b>, <b>Bootstrap5</b>, <b>Sass</b>, <b>Styled Components</b>, <b>Node Js</b>, <b>Express Js</b>, <b>Mongo Db</b>, <b>Postman</b> and <b>Jwt-Authorization</b>.",
    ],
    videoDemo:
      "https://www.linkedin.com/feed/update/urn:li:activity:6962305778502254592/",
    liveDemo: "",
    sourceCode: "",
  },
];

export const contactDetails = [
  {
    icon: MdCall,
    type: "Mobile",
    value: "8329812727",
    href: "",
  },
  {
    icon: GrMail,
    type: "Email",
    value: "jayesh.choudhary2906@gmail.com",
    href: "mailto:jayesh.choudhary2906@gmail.com",
  },
  {
    icon: MdLocationOn,
    type: "Address",
    value: "Burhanpur, Madhya Pradesh",
    href: "",
  },
  {
    icon: FaLinkedin,
    type: "Linkedin",
    value: "Contact through Linkedin",
    href: "https://www.linkedin.com/in/jayesh-choudhary-72444518b/",
  },
];

export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent, Kindly contact directly over Email or Phone!",
  successMessage:
    "Your message has been sent successfully, I will contact you soon!",
};
