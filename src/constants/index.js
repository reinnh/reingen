
  import image from '../assets/projects/image.png'
  import reinhard from '../assets/projects/reinlaptop.png'
  import photo from '../assets/projects/photography.jpg'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  
  
  export const experiences = [
    {
      title: "Personal Web Development",
      company_name: "",
      icon: '',
      iconBg: "#161329",
      date: "Sep 2024 - Current",
      points: [
        "Designed and developed personal web projects to showcase skills in front-end  development.",
        "Built and maintained a personal portfolio to demonstrate expertise in modern web technologies.",
      ],
    },
    {
      title: "Freelance Web Development",
      company_name: "Fransisco Organization",
      icon: '',
      iconBg: "#161329",
      date: "May 2024 - Sep 2024",
      points: [
        "Provided customized web solutions for small businesses and individual clients, delivering responsive and user-friendly websites.",
        "Managed full-stack development, from requirements gathering to deployment..",
        "Used technologies like React.js, Node.js, and Express to build dynamic web applications.",
      ],
    },
    {
      title: "Collaborative Projects",
      company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
      icon: '',
      iconBg: "#161329",
      date: "June 2023 - July 2023",
      points: [
        "Worked as part of a team to develop web applications, contributing to both front-end and back-end development..",
        "Used Git for version control and collaborated effectively with team members through GitHub.",
      ],
    },
  ];
  
  export const projects = [
    {
      name: "Fransisco website",
      description:
        "Web-based portfolio that  showcases information about services offered, skills and terms of services",
      tags: [
        { name: "Javascript, React", color: "blue-text-gradient" },
        { name: "HTML", color: "green-text-gradient" },
        { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
        { name: "React Portfolio by reingen", color: "yellow-text-gradient" },
      ],
      image: image,
      source_code_link: "https://reinnh.github.io/francis-website/",
    },
    {
      name: "Reingen initial portfolio",
      description:
        "Web based plartform showcasing individuals skills and services.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "Javascript", color: "pink-text-gradient" },
      ],
      image: reinhard,
      source_code_link: "https://github.com/reinnh/myreactrepo.git",
    },
    {
      name: "PhotoGallery Showcase",
      description:
        "A responsive image gallery website to display a collection of photos using HTML, CSS, and JavaScript.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient" },
      ],
      image: photo,
      source_code_link:
        "https://reinnh.github.io/francis-website/",
    }
  ]