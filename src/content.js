import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const banner = {
  username: "Matthew Lowe",
  title: "Hello, I'm Matthew",
  subTitle:
    "I'm a developer who has experience building Web and Mobile applications with JavaScript , React , PHP, Bootstrap, HTML/CSS(obviously) and other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/11AQOclgLE_gI3fLC43fhNs1r7hS-i8an/view?usp=sharing",
  displayBanner: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/7daytheory",
  linkedin: "https://www.linkedin.com/in/MatthewjLowe",
  gmail: "mlowecoding@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your applications",
    "Progressive Web Applications, Strong knowledge of APIs",
	  "Building and Maintaining databases"
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
      projectName: "Kings",
      projectDesc: "Available in Google Play Store!",
      projectType: "Javascript, JQuery, HTML, CSS3",
      projectLink: "https://play.google.com/store/apps/details?id=com.mattjlowe.www.twa",
      projectImage: null
    },
 	{
      projectName: "KC Chiefs Landing Page",
      projectDesc: "Landing Page with countdown to kickoff next season",
      projectType: "Javascript, React, HTML5, CSS3",
      projectLink: "chiefs/index.html",
      projectImage: null
    },
    {
      projectName: "Household manager",
      projectDesc: "CRUD application with React that organizes roommate chores, supplies and more.",
      projectType: "React, Bootstrap, Javscript",
      projectLink: "househould/index.html",
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
      projectName: "Google Drive",
      projectDesc: "Open and save files from your google drive",
      projectType: "Temporarily disabled - requires 3rd party cookies",
      projectLink: "#",
      projectImage: null
    },
    {
      projectName: "Hockey Stats",
      projectDesc: "API to get live data on each team",
      projectType: "Javascript, REST API, HTML5, CSS3, JQuery",
      projectLink: "hockey/index.html",
      projectImage: null
    },
  {
      projectName: "X's and O's",
      projectDesc: "Simple React X's and O's Game",
      projectType: "React, Javascript, HTML, CSS",
      projectLink: "XsandOs/index.html",
      projectImage: null
    }
  ]
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
      companylogo: "assets/images/quillsoft_logo.png",
      descBullets: [ "Created and growing the CMS that gives all our tech support the data that they need to help customers", "Worked on a PWA version of our main desktop app to keep up with use of chrome books in school", "Developed a license management system that is currently in use by every school district that uses our apps","Give design input and mock-up or code changes that will improve a products design and/or UI", "Take part in developer and management meetings weekly", "Using the most up to date methods to encrypt and keep the data we store safe"
      ]
    },
    {
      role: "Developer",
      company: "Strategic Transitions",
      date: "June 2011 - 2016",
      desc: "Tasks/Work",
      companylogo: "assets/images/st_logo.png",
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
  title: emoji("Achievements And Certifications"),
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
  workExperiences,
  achievementSection,
  contactInfo,
  openSource,
  sideProjects
};
