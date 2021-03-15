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
  subTitle: "Full stack developer that enjoys Javascript a lot",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Progressive Web Applications ( PWA )",
    "Integration of third party services such as Firebase/ AWS / React"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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

// Tech Stack Section

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Quillsoft",
      date: "June 2016 – Present",
      desc: "Tasks/Work",
      companylogo: "./assets/images/quillsoft_logo.png",
      descBullets: [ "Responsible for all the license management for all large school districts plus single usages",
"Built a PWA version of our desktop apps to keep up with use of chromebooks in schools across North America",
"One of two people in the company allowed access to the databases &amp; cpanel to make changes manually and update the database schema",
"Working with the other developers on new products when they require help",
"Delivery of weekly progress reports to Owners and CEO"
      ]
    },
    {
      role: "Web Developer",
      company: "Strategic Transitions",
      date: "June 2011 – 2016",
      desc: "Tasks/Work",
      companylogo: "./assets/images/st_logo.png",
      descBullets: [ "Responsible for all the database schema’s, front-end &amp; back-end programming",
"Created the license management system from scratch which is now used for all of our desktop program, apps, and chrome extensions",
"Encrypted all of the user’s information that may be considered sensitive",
"Created a custom CMS system to control all website content",
"Development of the Client Admin Web Panel to control their own bulk licenses and distribute them on their own"
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
  title: emoji("Contact Me ☎️"),
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
  openSource,
  achievementSection,
  contactInfo
};
