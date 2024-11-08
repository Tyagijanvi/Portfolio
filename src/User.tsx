import { IconBrandGithub, IconBrandInstagram,  IconBrandLinkedin,  IconBrandWhatsapp} from "@tabler/icons-react";

const Info = {
    name: "Jahanvi Tyagi",
    stack: [ "Full Stack Developer"],
    bio: "I’m a passionate full-stack developer with expertise in the MERN stack. I have hands-on experience in developing applications using the MERN stack and have worked on projects such as E-Commerce, hospital management system and Real Time Chat Application. I am eager to apply my skills in real-world environments and contribute to innovative software solutions. Currently seeking internship or entry-level opportunities to enhance my professional experience and grow in the IT industry."}
const ProjectInfo = [
    {
        title:"mern-ecommerce",
        desc: "It is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. It combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ecommerce.PNG",
        live: true,
        technologies:  ["React.js","Redis", "Node.js","DaisyUI", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Context API", "Redux"],
        link: "https://mern-ecommerce-2bhn.onrender.com",
        github: "https://github.com/Tyagijanvi/mern-ecommerce.git"
    },
    {
        title: "Hospital_management",
        desc: "The Hospital Management System is a comprehensive web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline hospital operations and improve patient care. The system allows for efficient management of patient records, doctor schedules, appointments, and billing. It offers real-time updates, secure data handling, and role-based access control for administrators, doctors, and patients. By automating various hospital workflows, the system reduces manual effort, enhances data accuracy, and ensures a seamless experience for all users.",
        image: "Hospital.PNG",
        live: true,
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Context API", "Redux"],
        link: "https://hsmsystem.netlify.app",
        github: "https://github.com/Tyagijanvi/Hospital_management.git"
    },
    {
        title: "MERN_CHAT_APP",
        desc:"The MERN Chat App is a real-time messaging platform developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to enable seamless communication between users. The application includes features such as user authentication, private and group chats, message history, and typing indicators. Real-time updates are powered by WebSockets, ensuring instant message delivery and responsiveness. The app provides a user-friendly interface with dynamic chat rooms and secure data handling, making it ideal for personal or organizational communication.",
        image: "chat.PNG",
        live: false,
        technologies: ["Tailwind CSS","DaisyUI" ,"React.js", "Node.js","DaisyUI" ,"Express.js", "MongoDB", "JWT", , "Context API", "Redux"],
        link: "https://github.com/Tyagijanvi/MERN_CHAT_APP.git",
        github: "https://github.com/Tyagijanvi/MERN_CHAT_APP.git"
    }
]

    const SkillInfo = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", , "JavaScript", "React JS", "Redux", "Tailwind CSS",  "Material UI", "Bootstrap"
            ]
        },
        {
            title: "Backend",
            skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", ]
        },
        {
            title: "Languages",
            skills: ["C", , "Java", "JavaScript", "TypeScript"]
        },
        {
            title: "Tools",
            skills: [, "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
        }
    
]
const socialLinks = [
    { link: "https://github.com/Tyagijanvi", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/jahanvi-tyagi-2817072aa/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/tyagijanvi_", icon: IconBrandInstagram }, 
    { link: "https://tinyurl.com/3h9ypyp9", icon:  IconBrandWhatsapp },

];

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info,
    ProjectInfo,
    socialLinks, 
     SkillInfo,
      
       Slugs
     };