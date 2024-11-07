
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  
  animated: true // Set to false to use static SVG
  
};

const greeting = {
  username: "Nilesh Sharma",
  title: "Hi all, I'm Nilesh",
  subTitle: emoji(
    "A passionate Android and Software Developer  🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Kotlin and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dHmnZ-sC7Uvxem5Ux1f3PTR_KkIkrSHX/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nilesh0210977",
  linkedin: "https://www.linkedin.com/in/mrnilesh/",
  gmail: "nileshsharma.0210977@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "",
  medium: "https://medium.com/@nileshsharma.0210977",
  // stackoverflow: "https://medium.com/@nileshsharma.0210977",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ANDROID DEVELOPER AND FULL STACK WEB DEVELOPER(learning...) WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Interactive Android Apps with Kotlin"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "kotlin",
      fontAwesomeClassname: "fas fa-K"
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
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname:"fab fa-flutter"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute Of Information Technology Design And Manufacturing Kurnool",
      logo: require("./assets/images/IIITDMK_logo.png"),
      subHeader: "Bachelor Of Technology",
      duration: "2022-26",
      desc: "",
      descBullets: [
        "CGPA-7.97(Upto 4th Sem)"
      ]
    },
    {
      schoolName: "KIIT",
      logo: require("./assets/images/kiit.jpeg"),
      subHeader: "Class 12th",
      duration: "2021-22",
      desc: "Ranked Among Top 5 in School and Among Top 500 In State-Class",
      descBullets: ["95.8%"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Extrern",
      company: "AlgoUniversity (backed by Y-Combinator)",
      companylogo: require("./assets/images/algo.jpeg"),
      date: "May 2024 – July 2024",
      desc: "Worked on an Online Judge platform which verifies the users’ code against various test cases and gives a verdict.",
      descBullets: [
        "Got mentorship of senior engineers from Google London, Apple, Bytedance Singapore and Alphagrep Singapore, I learned real word software development and learned about scalability."
      ]
    }
 
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/icon_new.png"),
      projectName: "CampusConnect",
      projectDesc: "The CampusConnect app aimed to streamline campus communication and resource access for students. It featured event notifications, academic updates, forums, and resource sharing and WIFI+QR based attendance system.",
      footerLink: [
        {
          name: "Check App",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Amazon ML Challenge",
      subtitle:
        "Our team Secured 440 Rank Out of 18000+ team participated",
      image: require("./assets/images/ml.jpeg"),
      imageAlt: "Amazom ML Challenge",
      footerLink: [
      
      ]
    },
    {
      title: "CodeChef",
      subtitle:
        "4 Star at CodeChef – codeChef Contest – Codechef(highest Rating 1806).",
      image: require("./assets/images/codechef.png"),
      imageAlt: "CodeChef",
      footerLink: [
        {
          name: "Visit Profile",
          url: "https://www.codechef.com/users/nileshsharma02"
        }
      ]
    },

    {
      title: "Oracle-GenAI",
      subtitle: "Passed Oracle OCI Gen AI Test and Secured Oracle certificate.",
      image: require("./assets/images/genai.png"),
      imageAlt: "Oracle-GenAI",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "ORACLE Certificate",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=49A9D9C4B14E93C1B7636E6B958A4323EF494DB5F6485C693E7FCDD9F8568B09"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@nileshsharma.0210977/deploying-machine-learning-models-in-android-apps-using-android-studio-731db875fdf5",
      title: "Deploying Machine Learning Models in Android Apps Using Android Studio",
      description:
        "Learn Android Studio and how to deploy Machine Learning Models in Android Apps.",
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {

  display: false // Set false to hide this section, defaults to true
};

// // Podcast Section

const podcastSection = {

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
  number: "+91-9777244013",
  email_address: "nileshsharma.0210977@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
