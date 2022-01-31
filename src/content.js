import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const banner = {
  username: "Matthew Lowe",
  title: "Hello, I'm Matthew",
  subTitle: emoji(
    "A passionate Full Stack Software Developer who has experience building Web and Mobile applications with JavaScript / React / Vue / PHP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NUDZgYWF2FcD186QV5UgqcKYO83vo22g/view?usp=sharing",
  displayBanner: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/7daytheory",
  linkedin: "https://www.linkedin.com/in/MatthewjLowe",
  gmail: "matthewjlowe11@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your applications",
    "Progressive Web Applications ( PWA )",
    "REST and other APIs"
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fanshawe College",
      subHeader: "Interactive Media & Development",
      duration: "September 2010 - May 2012",
      desc: "Coding & Multimedia Course",
      descBullets: [
        "Hired during my final year by a company doing a project with our class of 100s of students",
      ]
    },
    {
      schoolName: "Fanshawe College",
      subHeader: "Graphic Design",
      duration: "September 2009 - May 2010",
      desc: "Finished the first year but decided to take a more coding specific course",
      descBullets: ["I have a strong Graphic Design background to go along with my coding."]
    }
  ]
};

// Side projects Section
const sideProjects = {
  display: true, // Set false to hide this section, defaults to true
  projects: [
 {
      projectName: "The Venue",
      projectDesc: "Landing Page with countdown for an event",
      projectType: "Javascript, React, HTML5, CSS3",
      projectLink: "venue/index.html",
      projectImage: null
    },
    {
      projectName: "Quiz Game",
      projectDesc: "Quiz game that uses an API to fetch questions",
      projectType: "Javascript, HTML, CSS3, localstorage",
      projectLink: "quiz/index.html",
      projectImage: null
    },
    {
      projectName: "Kings",
      projectDesc: "The game 'Kings' if you forget cards",
      projectType: "Javascript, JQuery, HTML, CSS3",
      projectLink: "kings/index.html",
      projectImage: null
    },
    {
      projectName: "2 Player Dice Game",
      projectDesc: "Roll Dice to get to the score before your opponent",
      projectType: "Javascript, HTML5, CSS3",
      projectLink: "dice/index.html",
      projectImage: null
    },
  {
      projectName: "Google Drive",
      projectDesc: "Open and save files from your google drive",
      projectType: "Javascript, GoogleDriveAPI, HTML5, CSS3",
      projectLink: "googledrive/index.html",
      projectImage: null
    },
    {
      projectName: "Hockey Stats",
      projectDesc: "Get live updates on all NHL teams and players stats",
      projectType: "Javascript, API, HTML5, CSS3, JQuery",
      projectLink: "hockey/index.html",
      projectImage: null
    },
   /* {
      projectName: "Simple Canvas HTML5 Game",
      projectDesc: "Gollect all 6 infinity stones as Thanos - Currently browser only",
      projectType: "Javascript, HTML5, Canvas, CSS3",
      projectLink: "html5Game/index.html",
      projectImage: null
    }, */
  {
      projectName: "X's and O's",
      projectDesc: "Simple React X's and O's Game",
      projectType: "React, Javascript, HTML",
      projectLink: "src/XsandOs/index.html",
      projectImage: null
    }
  ]
};

// Tech Stack Section

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "85%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "90%"
    },
    {
      Stack: "PHP",
      progressPercentage: "80%"
    },
    {
      Stack: "React",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Quillsoft",
      date: "June 2016 - Present",
      desc: "Tasks/Work",
      companylogo: "./assets/images/quillsoft_logo.png",
      descBullets: [ "Created and growing the CMS that gives all our tech support the data that they need to help customers", "Worked on a PWA version of our main desktop app to keep up with use of chrome books in school", "Developed a license management system that is currently in use by every school district that uses our apps","Give design input and mock-up or code changes that will improve a products design and/or UI", "Take part in developer and management meetings weekly", "Using the most up to date methods to encrypt and keep the data we store safe"
      ]
    },
    {
      role: "Developer",
      company: "Strategic Transitions",
      date: "June 2011 - 2016",
      desc: "Tasks/Work",
      companylogo: "./assets/images/st_logo.png",
      descBullets: ["Created their websites and a CMS system for the website","Converted the company from shipping CD's to a subscription based model","Created the license management system which was used for all the companies applications and programs","Responsible for creating encryption methods for all the client's personal info", "Developed a CMS system to keep track of client data, content, and give our tech support team the data required to help people having issues"
      ]
    }
  ]
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "7daytheory", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Contact Me and I will return your message as soon as posssible.",
  email_address: "matt@mattjlowe.com"
};

export {
  illustration,
  banner,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  contactInfo,
  openSource,
  sideProjects
};
