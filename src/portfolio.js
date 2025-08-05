/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

import htmlIcon from "./assets/svgs/html-icon.svg";
import cssIcon from "./assets/svgs/css-icon.svg";
import JavaScript from "./assets/svgs/javascript-programming-language-icon.svg";
import ReactJs from "./assets/svgs/react-js-icon.svg";
import VueJs from "./assets/svgs/vue-js-icon.svg";
import NextJs from "./assets/svgs/nextjs-icon.svg";
import NodeJs from "./assets/svgs/node-js-icon.svg";
import ExpressJs from "./assets/svgs/express-js-icon.svg";
import mongoDB from "./assets/svgs/mongodb-icon.svg";
import mysql from "./assets/svgs/mysql-icon.svg";
import Tailwaind from "./assets/svgs/tailwind-css-icon.svg";
import npm from "./assets/svgs/npm.svg";
import postgres from "./assets/svgs/postgresql-original-wordmark.svg";
import postman from "./assets/svgs/postman-icon.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Syed Sulthan",
  title: "Syed Sulthan",
  subTitle: emoji(
    "A passionate Full Stack Web Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / VueJs / Nodejs / ExpressJs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18X13ARgLUYg06NzrzXBeCGNCRglYZDD5/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Syed-skipper",
  linkedin: "https://www.linkedin.com/in/syed-sulthan-778688267/",
  gmail: "syedsulthan868@gmail.com",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@syedsulthan868",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build modern, dynamic front-end interfaces optimized for performance, accessibility, and cross-platform usability."
    ),
    emoji(
      "⚡ Transform UI/UX designs into pixel-perfect, functional front-end components."
    ),
    emoji(
      "⚡ Optimize performance and load times through code-splitting, lazy loading, and image optimization."
    ),
    emoji(
      "⚡ Utilize CSS preprocessors (like Sass/SCSS) and utility-first frameworks like Tailwind CSS"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML-5",
      image: htmlIcon
    },
    {
      skillName: "CSS3",
      image: cssIcon
    },
    {
      skillName: "JavaScript",
      image: JavaScript
    },
    {
      skillName: "Tailwaind Css",
      image: Tailwaind
    },
    {
      skillName: "ReactJs",
      image: ReactJs
    },
    {
      skillName: "NextJs",
      image: NextJs
    },
    {
      skillName: "VueJs",
      image: VueJs
    },
    {
      skillName: "NodeJs",
      image: NodeJs
    },
    {
      skillName: "NPM",
      image: npm
    },
    {
      skillName: "Express JS",
      image: ExpressJs
    },
    {
      skillName: "Mysql",
      image: mysql
    },
    {
      skillName: "MongoDB",
      image: mongoDB
    },
    {
      skillName: "PostgreSQL",
      image: postgres
    },
    {
      skillName: "Postman",
      image: postman
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Madurai Kamarajar University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2018 - May 2021",
      desc: "Ranked top 10% in the program.",
      descBullets: [
        "Core subjects: Data Structures, Web Development, DBMS, Operating Systems"
      ]
    },
    {
      schoolName: "De Nobili Matric Hr Sec School",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "May 2017 - April 2018",
      desc: "Secured 78% in academics with strong performance in Computer Science.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer - I (Full Stack Developer)",
      company: "Infynect Labs Private Limited",
      companylogo: require("./assets/images/infynectlogo.avif"),
      date: "Dec 2022 – Jan 2025",
      desc: "Worked as a Full Stack Developer with a strong focus on crafting seamless and modern user interfaces. Contributed significantly to the development of an LG WebOS application used in Smart TVs.",
      descBullets: [
        "Developed and deployed a Smart TV application using LG's webOS TV SDK with deep integration into webOS CLI tools and VS Code as the primary development environment.",
        "Led UI architecture for scalable components and consistent design systems across multiple modules.",
        "Collaborated with cross-functional teams to optimize performance and responsiveness across different devices.",
        "Integrated backend services and APIs, ensuring secure and smooth data flow between client and server."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "",
  projects: [
    {
      projectName: "Blog Hub",
      image: require("./assets/images/blog.png"),
      projectDesc: "A Simple Blogging Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://luminous-cobbler-cbc829.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Todo App",
      image: require("./assets/images/TODO.png"),
      projectDesc: "A simple Todo Application with Group",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://todo-app-ui-lake.vercel.app/login"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and Highlights",

  achievementsCards: [
    {
      title: "MERN Stack Development Certification",
      subtitle:
        "Certified MERN Stack Developer (GUVI)",
      image: require("./assets/images/mern.png"),
      imageAlt: "MERN Stack Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1MaxZgEGKEUUirZzm7MIX3cfx1AX0wi51/view?usp=drive_link" // replace with your actual link
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9597203734",
  email_address: "syedsulthan868@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
