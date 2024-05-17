import image1 from "../assets/image.png"
import image2 from "../assets/CP.jpg"


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    degree: "Bsc(Hons) Software Engineering",
    company: "University of Westminster",
    description: `Graduated from the first year of undergraduate studies with a strong academic record. Relevant Modules - Computer System Fundamentals (A)
    Database Management (A)
    Mathematics for Computing (A)
    Web Design and Development (A)
    Software Development I (A)
    Software Engineering Principles (A)
    Trends in Computer Science (A)
    Object Oriented Programming (A)
    Software Development II (B)`,
    technologies: ["Credits - 120"],
  },

  {
    year: "2017 - 2020",
    degree: "GCE Advanced Level",
    company: "Rahula College Matara",
    description: `During my Advanced Level studies, I achieved excellent grades in Physics, Chemistry and Biology showcasing my strong analytical and scientific abilities.During my Advanced Level studies, I achieved excellent grades in Physics, Chemistry and Biology showcasing my strong analytical and scientific abilities.`,
    technologies: ["Physics - A | Chemistry - A | Biology - C | Z-Score : 1.698 " ],
  },
  {
    year: "2011 - 2016",
    degree: "GCE Ordinary Level",
    company: "Central College Telijjawila",
    description: `During my Ordinary Level studies, I achieved excellent grades in all the subjects showcasing my strong analytical and scientific abilities.`,
    technologies: ["A-8 | B-1"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Career Pulse - Employment Marketplace with Application Monitoring System",
    image: image2,
    description:
      "I led a team in developing a web applicationaimed at revolutionizing the job market by integrating a job marketplace with aninnovative CV progress tracking system. Users can easily browse and apply for jobsthrough the system. Once they upload their CV and application, they can track theprogress of their applications.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "MongoDB", "Express.js", "TailwindCss"],
  },
  {
    title: "Sliding Puzzle",
    image: image2,
    description:
      "Tasked with navigating a grid-based map from a designated start to finish point while manoeuvring through frictionless ice and avoiding obstacles, I devised a comprehensive solution. This involved translating the grid map into a graph data structure and implementing the BFS algorithm as a path-finding algorithm.",
    technologies: ["Java"],
  },
  {
    title: "Portfolio Website",
    image: image2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "TailwindCss", "HTML"],
  },
  {
    title: "Finacial Forecasting Model",
    image: image2,
    description:
      "Undertook a project in financial forecasting utilizing neural network techniques, specifically focusing on predicting one-step-ahead exchange rates for USD/EUR. Utilized daily exchange rate data and experimented with autoregressive approaches, constructing input/output matrices and normalizing data. Evaluated multiple MLP models with various internal structures using standard statistical indices.",
    technologies: ["R"],
  },
  {
    title: "Explore Ceylon",
    image: image2,
    description:
      " Developed a comprehensive website, Explore Ceylon in collaboration with three colleges. The website serves as a one-stop destination for users to discover attractions, learn about Sri Lankan culture, explore local cuisine, and access transportation information.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
