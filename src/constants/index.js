import {
  adhiyaman,
  angular,
  backend,
  bootstrap,
  css,
  docker,
  figma,
  gandhinagar,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  projectLogo,
  rmd,
  spring,
  tailwind,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui/Ux Designer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const education = [
  {
    title: "B.Tech (Information Technology)",
    company_name: "R.M.D. Engineering College",
    icon: rmd,

    iconBg: "#383E56",
    date: "November 2020 - March 2024",
  },
  {
    title: "Higher Secondary School",
    company_name: "Adhiyaman Matric Hr Sec School",
    icon: adhiyaman,
    iconBg: "#383E56",
    date: "March 2020",
  },
  {
    title: "Secondary School",
    company_name: "Gandhi Nagar Matric Hr Sec School",
    icon: gandhinagar,
    iconBg: "#383E56",
    date: "March 2018",
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Object detection in e_Commerece",
    description:
      "Web application that enables users to search for an object in e-commerce website using live camera feed by using yolov8 model.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: projectLogo,
    source_code_link: "https://github.com/santokie21/e-commerce-frontend",
  },
  {
    name: "Virtual Library Experience",
    description:
      "A virtual library experience that allows users to browse, search, and read books online. Users can also create and manage their own library. Admin can also view the statistics of the library.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: projectLogo,
    source_code_link:
      "https://github.com/santokie21/Library-Management-System-Frontend",
  },
  {
    name: "Store Front",
    description:
      "An e-commerce store front that allows users to browse, search, and purchase products online. Admin can also manage the products and orders. Users can also view the order history.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: projectLogo,
    source_code_link: "https://github.com/santokie21/Store-Front-client",
  },
];

export { education, projects, services, technologies, testimonials };
