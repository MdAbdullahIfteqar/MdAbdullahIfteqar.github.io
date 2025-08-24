/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Mohammed Abdullah Ifteqar",
  title: "Hi all, I'm Abdullah",
  subTitle: emoji(
    "A passionate Software Engineer & Machine Learning Enthusiast 🚀 with 5+ years of experience in building scalable backend systems, APIs, and AI-powered solutions. Skilled in databases, distributed systems, and modern ML techniques including LLMs, CNNs, RNNs, and time-series forecasting."
  ),
  resumeLink:
    "https://drive.google.com/your_resume_link_here", // Update with your resume link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/MdAbdullahIfteqar",
  linkedin: "https://www.linkedin.com/in/md-abdullah-ifteqar-of/",
  gmail: "md.abdullah.ifteqar.of@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER TURNED ML ENTHUSIAST WHO LOVES TO BUILD IMPACTFUL SOLUTIONS",
  skills: [
    emoji("⚡ Build scalable backend services and REST/GraphQL APIs with Django & Spring Boot"),
    emoji("⚡ Design and manage databases (Postgres, Redis, DynamoDB, MySQL, MongoDB, Memcache)"),
    emoji("⚡ Implement distributed queues with Kafka and AWS SQS"),
    emoji("⚡ Develop and deploy Machine Learning models (LLMs, CNNs, RNNs, ANNs, Time Series)"),
    emoji("⚡ End-to-end web applications using React for frontend and Node/Django for backend")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "SQL/Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Kafka", fontAwesomeClassname: "fas fa-stream" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Ontario Post-Secondary Certification in Artificial Intelligence & Data Science",
      logo: require("./assets/images/loyalist_logo.jpg"),
      subHeader: "AI & Data Science Program",
      duration: "May 2024 - Dec 2025",
      desc: "Focused on Machine Learning, Computer Vision, Reinforcement Learning, and Applied Data Science."
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "B.Tech in Electronics & Communication Engineering",
      duration: "2015 - 2019",
      desc: "Graduated with a strong foundation in electronics, communication, and computer science fundamentals."
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend Development", progressPercentage: "90%" },
    { Stack: "Machine Learning / AI", progressPercentage: "75%" },
    { Stack: "Frontend (React)", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Confidential",
      companylogo: require("./assets/images/quince.jpeg"),
      date: "Jan 2023 – Feb 2024",
      desc: "Built and deployed ML models including LLM-based applications, CNNs, RNNs, and time series forecasting for real-world use cases."
    },
    {
      role: "Software Developer II (Backend)",
      company: "Quince",
      companylogo: require("./assets/images/quince.jpeg"),
      date: "May 2021 – Dec 2022",
      desc: "Developed backend systems, APIs, and database-driven services with Django & Spring Boot, improving scalability and performance."
    },
    {
      role: "Full Stack Developer",
      company: "OYO Rooms",
      companylogo: require("./assets/images/oyo_logo.png"),
      date: "May 2019 – Apr 2021",
      desc: "Worked on scalable full-stack solutions using React, Node.js, and backend services to improve user experience and system reliability."
    }
  ]
};

// Other sections (openSource, bigProjects, achievements, blogs, talks, podcasts, resume, contact, twitter)
const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME IMPACTFUL PROJECTS AND APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Sentiment Analysis",
      projectDesc: "Created LSTM based sentiment analysis for commnets on yelp restorent data.",
      footerLink: [{ name: "View Project", url: "https://github.com/yourgithub/chatbot" }]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "The Oval Office",
      projectDesc: "Built ML models to forecast 2024 US Presidential elections.",
      footerLink: [{ name: "View Project", url: "https://github.com/yourgithub/dashboard" }]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Some cool certifications and milestones",
  achievementsCards: [
    {
      title: "AWS Certified Developer (if you hold it or plan to)",
      subtitle: "Demonstrated knowledge of building and deploying scalable apps on AWS.",
      image: require("./assets/images/nextuLogo.webp"),
      imageAlt: "AWS Logo",
      footerLink: []
    }
  ],
  display: false // set true once you have certifications to showcase
};

const blogSection = {
  title: "Blogs",
  subtitle: "I love to share what I learn about AI, backend engineering, and modern software.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "Occasional talks about AI & Software Engineering",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love to talk about AI & technology",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project, collaboration, or just say hi!",
  number: "+1-416-826-4640",
  email_address: "md.abdullah.ifteqar.of@gmail.com"
};

const twitterDetails = {
  userName: "yourtwitter",
  display: false
};

const isHireable = true;

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
