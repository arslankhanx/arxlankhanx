/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arslan's Portfolio",
  description:
    "Welcome to my software development portfolio, showcasing my skills & projects as a beginner developer. I am eager to learn & grow in the field. My portfolio reflects my passion and dedication to software development. Let's collaborate and build something great together.",
  og: {
    title: "Arslan Khan Portfolio",
    type: "website",
   // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Arslan Khan",
  logo_name: "Arslan Khan",
  nickname: "Software-Engineer",
  subTitle:
    "Welcome to my software development portfolio, showcasing my skills & projects as a beginner developer. I am eager to learn & grow in the field. My portfolio reflects my passion and dedication to software development. Let's collaborate and build something great together.",
  resumeLink:
    "https://drive.google.com/file/d/1A4vWNYUZK4e5VsG4dWJ7WyQlmXmLGcFE/view?usp=sharing",
  githubProfile: "https://github.com/ArxlanKhan",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ArxlanKhan",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "workplaceasarslan@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/arxlan.khan.x/"

  {
    name: "Github",
    link: "https://github.com/ArxlanKhan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-arslan-a42b91252/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "workplacearslan@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/arxlankhanx1",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008359996927",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/arxlan.khan.x/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Computer Scientist",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design and develop computer software and systems.",
        "⚡ Use mathematical and computational techniques to solve problems.",
        "⚡ Conduct research in areas such as artificial intelligence, computer graphics, and human-computer interaction.",
      ],
      softwareSkills: [
       
        
        
        
      
        
      
        
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop and maintain both the front-end and back-end of web applications using a variety of programming languages and frameworks.",
        "⚡ Create functional and visually appealing websites and applications.",
        "⚡ Continuously update and improve the performance and scalability of the applications.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Blockchain Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Learn about blockchain technology and its use cases.",
        "⚡ Assist in the development and implementation of blockchain-based solutions.",
        "⚡ Understand and work with smart contract development.",
        "⚡ Research and stay up-to-date on the latest developments in the blockchain industry.",
      ],
      softwareSkills: [
       
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Superior University Lahore",
      subtitle: "Bachelor of Science in Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "SUL",
      duration: "2019 - present",
      descriptions: [
        "⚡ I learn how to write code in various programming languages, such as C++, Java, as well as how to use development tools and frameworks. Understanding programming concepts and how to design, implement and test software is a core part of computer science education",
        "⚡ I will learn about the fundamental concepts of algorithms and data structures, such as sorting and searching algorithms, and how to use them to solve problems efficiently.",
        "⚡ I  will learn about the inner workings of computers, including topics such as operating systems, computer networks, and databases. Understanding the underlying technology that makes software run is critical for computer scientists.",
      ],
      website_link: "https://www.superior.edu.pk/",
    },
    {
      title: "Government College of Science",
      subtitle: "Intermediate in Science",
      logo_path: "iu_logo.png",
      alt_name: "GCS",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Learn the basics of one programming language C++, and practice writing simple programs.",
        "⚡ I learn about fundamental concepts such as sorting, searching, and data structures, and practice implementing them in code.",
        "⚡ I learn about the inner workings of computers, including topics such as operating systems, computer networks, and databases.",
      ],
      website_link: "https://sites.google.com/gcslahore.edu.pk/ggcs/home?pli=1",
    },
  ],
};

const certifications = {
  certifications: [
   /* {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "During my degree, I have worked on a variety of projects including a food management system for web application, an E-land registration system, an NFT marketplace, and many more. These projects demonstrate my ability to apply my knowledge of computer science to develop practical solutions to real-world problems. The food management system for web application project showcases my skills in web development and database management, while the E-land registration system highlights my proficiency in system design and implementation. The NFT marketplace project exemplifies my understanding of blockchain technology and its application in the digital market. These projects highlight my technical abilities and dedication to solving complex problems, making me a valuable asset to any organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
      
     
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Blockchain Intern",
          company: "Softcircle",
        
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "Johar town ,Lahore",
          description:
            "During my 3 months of internship in blockchain, I gained hands-on experience in the development and implementation of blockchain technology. I worked on projects that involved creating smart contracts, building decentralized applications and participating in the testing and deployment of the same.",
          color: "#000000",
        },
      
       
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Web seminar",
          company: "IEEE",
          logo_path: "google_logo.png", 
          location: "Lahore",
          description:
            "I recently volunteered as a member of the organizing team for a web seminar on the latest trends and developments in the field of computer science. ",
          color: "#4285F4",
        },
      
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
   
   
    
    
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. Please don't hesitate to message me.I'll be happy to hear from you!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sabzazar Housing Scheme Phase 1 & 2 Lahore, Punjab Pakistan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Sabzazar+Sabzazar+Housing+Scheme+Phase+1+%26+2+Lahore,+Punjab,+Pakistan/@31.5238426,74.2491182,14z/data=!3m1!4b1!4m5!3m4!1s0x3919031dc5a0ba89:0xdaa15c48183fd4!8m2!3d31.520889!4d74.2700511",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
