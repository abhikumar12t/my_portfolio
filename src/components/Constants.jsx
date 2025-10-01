// src/components/Constants.js

import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css.png";
import javascriptLogo from "../assets/images/javascript.png";
import reactjsLogo from "../assets/images/reactjs.png";
import tailwindcssLogo from "../assets/images/tailwindcss.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import nodejsLogo from "../assets/images/nodejs.png";
import expressjsLogo from "../assets/images/express.png";
import mongodbLogo from "../assets/images/mongodb.png";

import gitLogo from "../assets/images/git.png";
import githubLogo from "../assets/images/github.png";
import vscodeLogo from "../assets/images/vscode.png";
import postmanLogo from "../assets/images/postman.png";
import mcLogo from "../assets/images/mc.png";
import netlifyLogo from "../assets/images/netlify.png";
import vercelLogo from "../assets/images/vercel.png";


// project 
import WorldAtlash from "../assets/images/worldatlash.png";
import Restaurant from "../assets/images/Restaurant.png";

// education
import UpBoard from "../assets/images/UPBoard.jpg";
import diploma from "../assets/images/diploma.jpg";
import BSC from "../assets/images/BSC.jpg";

// experiences
import Gicseh from "../assets/images/Gicseh.avif";





export const SkillsInfo = [
  {
    title: "Skills",
    items: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];





export const projects= [
    {
       id: 0,
       title: "WorldAtlash",
       description: "World Atlas is a web application that provides information about all countries in the world. It displays details such as the official name, population, region, subregion, capital, languages, and timezones of each country This project uses an API to fetch real-time data so that the information always stays updated. The main purpose of this project is to help users quickly access basic information about any country in one place.",
       image: WorldAtlash,
       technologies: [ 'HTML ' , 'CSS  ' , 'JavaScript  ' , 'React.Js  ' , 'Tailwind.CSS  ', 'API'],   
       github: 'https://github.com/abhikumar12t/world-atlash',
       webLink: 'https://world-atlash.vercel.app/'
    },
    {
  id: 1,
  title: "Food Application",
  description:"A full-stack web application where users can easily make restaurant reservations. Customers fill out a form with their name, email, phone number, date, and time. The frontend (React) sends this data to the backend (Node.js + Express), which validates it and stores it securely in MongoDB Atlas. The app is fully deployed with Vercel (frontend) and Render (backend).",
  image: Restaurant,
  technologies: ['HTML', 'CSS', 'JavaScript', 'React.Js', 'API', 'Node.js', 'Express.js', 'MongoDB'], 
  github: 'https://github.com/abhikumar12t/food_Applications',
  webLink: 'https://food-applications.vercel.app/'
}


]




export const education = [
  { 
    id: 0,
    img: BSC,
    school: "Maharaja Suheldev University, Azamgarh",
    date: "2024 – Present",
    grade: "Pursuing",
    degree: "Bachelor of Science (B.Sc)",
    desc: "Currently pursuing B.Sc from Maharaja Suheldev University, Azamgarh.",
    schoolinfo: 'https://msdu.ac.in/'
    
  },
   
  
  // diploma
  {
    id: 1,
  img: diploma,
  school: "Global Institute of Cyber Security & Ethical Hacking (GICSEH), Noida",
  date: "Aug 2024",
  grade: "A+ Grade",
  degree: "Diploma in Full Stack Web Development",
  desc: "Successfully completed a diploma program in Full Stack Web Development covering HTML, CSS, JavaScript, React.js, Tailwind, bootstrap Node.js, Express.js, and MongoDB. Gained hands-on experience in building full-stack applications and API integration.",
  schoolinfo: "https://gicseh.com/",
}, 


// 12th
       {
      id: 2,
      img: UpBoard,
      school: "Board of High School and Intermediate Education, Prayagraj, Uttar Pradesh",
      date: "Apr 2022 - April 2024",
      grade: "56%",
      desc: "I completed my class 12 education from Board of High School and Intermediate Education, Prayagraj, Uttar Pradesh , under the Up board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "Up-Board(XII) - PCM with Science",
    },

// 10th 
    { id: 3,
      img: UpBoard,
     school: "Board of High School and Intermediate Education, Prayagraj, Uttar Pradesh",
      date: "July 2020 - July 2021",
      grade: "83%",
       desc: "I completed my class 10 education fromBoard of High School and Intermediate Education, Prayagraj, Uttar Pradesh , under the Up board, where I studied Science with Computer.",
       degree: "Up-Board(X), Science",
    },

]



  export const experiences = [
    {
      id: 0,
      img: Gicseh,
      role: "front-end Developer",
      company: "Gicseh",
      date: "August 2024 - February 2025",
      desc: "Developed responsive and interactive web applications using modern front-end technologies including HTML, CSS, JavaScript, React.js, and Bootstrap. Created dynamic UI components, ensured cross-browser compatibility, and optimized application performance. Collaborated with team members in an agile environment to deliver seamless user experiences",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
       "bootstrap"
      ],
    },
    ]



