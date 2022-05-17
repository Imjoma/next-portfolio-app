import { AiFillHtml5 } from "react-icons/ai";
import { RiCss3Fill } from "react-icons/ri";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const designs = [
  {
    id: 1,
    name: "Sample 1",
    tags: "#web, #ui",
    image: "/src/assets/designs/12.webp",
    typography: [{ name: "Century Gothic" }],
    colors: [
      { color: "#000000" },
      { color: "#1C1C1C" },
      { color: "#313131" },
      { color: "#AE936C" },
      { color: "#FFFFFF" },
    ],
  },
  {
    id: 2,
    name: "Sample 2",
    tags: "#all, #web ui",
    image: "/src/assets/designs/1.webp",
    typography: [{ name: "Zenzai Itachi" }],
    colors: [
      { color: "#000000" },
      { color: "#101010" },
      { color: "#EBECEC" },
      { color: "#F8F6F6" },
      { color: "#FFFFFF" },
    ],
  },
  {
    id: 3,
    name: "Sample 3",
    tags: "#all, #web ui",
    image: "/src/assets/designs/4.webp",
    typography: [{ name: "Poppins" }, { name: "Moonbeam" }],
    colors: [{ color: "#011111" }, { color: "#024E4B" }, { color: "#FFFFFF" }],
  },
  {
    id: 4,
    name: "Sample 4",
    tags: "#all, #web ui",
    image: "/src/assets/designs/5.webp",
    typography: [{ name: "Calibri" }],
    colors: [
      { color: "#700025" },
      { color: "#6C072A" },
      { color: "#FF94BE" },
      { color: "#FFFFFF" },
    ],
  },
  {
    id: 5,
    name: "Sample 5",
    tags: "#all, #web ui",
    image: "/src/assets/designs/6.webp",
    typography: [{ name: "Century Gothic" }],
    colors: [
      { color: "#000000" },
      { color: "#1A1A1A" },
      { color: "#818B94" },
      { color: "#860102" },
      { color: "#CA060A" },
      { color: "#FFFFFF" },
    ],
  },
  {
    id: 6,
    name: "Sample 6",
    tags: "#all, #web ui",
    image: "/src/assets/designs/8.webp",
    typography: [{ name: "Montserrat" }],
    colors: [
      { color: "#020A0C" },
      { color: "#0C373B" },
      { color: "#FFC83D" },
      { color: "#FFFFFF" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Color Yoinker",
    field: "color-yoinker",
    description:
      " - an awesome color picker that let everyone create their own palette.",
    image_path: "/src/assets/projects/color-yoinker.png",
    figma_url: "",
    github_url: "https://github.com/Imjoma/react-color-yoinker",
    deployed_url: "https://extraordinary-squirrel-2aa822.netlify.app",
    category: ["react"],
    key_techs: [
      "React",
      "CSS",
      "uuid",
      "react-color",
      "react-copy-to-clipboard",
    ],
    version: "1.0",
    duration: "March 19, 2022",
    features: [
      'a color palette app inspired from <span class="underline bold"><a href="https://flatuicolors.com/" target="_blank">Flat UI Colors.</a></span>',
      'added a <span  class="bold">Create Pallete</span> feature',
      'save at <span  class="bold">Local Storage</span>',
    ],
  },
  {
    id: 2,
    name: "2",
    field: "2",
    description:
      "an awesome color picker the let everyone create their own palette.",
    image_path: "/src/assets/projects/color-yoinker.png",
    github_url: "https://github.com/Imjoma/react-color-yoinker",
    deployed_url: "https://extraordinary-squirrel-2aa822.netlify.app",
    category: ["react"],
    key_techs: [
      "React",
      "CSS",
      "uuid",
      "react-color",
      "react-copy-to-clipboard",
    ],
    version: "1.0",
    duration: "March 19, 2022",
    features: [
      'a color palette app inspired from <a href="https://flatuicolors.com/" className="underline">Flat UI Colors.</a>',
      "added a <span className='text-white'>Create Pallete</span> feature",
      "save at <span className='text-white'>Local Storage</span>",
    ],
  },
];

export const tech_stacks = [
  {
    id: 1,
    name: "HTML",
    category: "frontend",
    Icon: AiFillHtml5,
  },
  {
    id: 2,
    name: "CSS",
    category: "frontend",
    Icon: RiCss3Fill,
  },
  {
    id: 3,
    name: "Javascript",
    category: "frontend",
    Icon: SiJavascript,
  },
  {
    id: 4,
    name: "ReactJS",
    category: "frontend",
    Icon: FaReact,
  },
  {
    id: 5,
    name: "NextJS",
    category: "frontend",
    Icon: SiNextdotjs,
  },
  {
    id: 6,
    name: "Tailwind",
    category: "frontend",
    Icon: SiTailwindcss,
  },
  {
    id: 7,
    name: "Bootstrap",
    category: "frontend",
    Icon: SiBootstrap,
  },
  {
    id: 8,
    name: "Figma",
    category: "frontend",
    Icon: SiFigma,
  },
  {
    id: 9,
    name: "Git",
    category: "version control",
    Icon: FaGitAlt,
  },
  {
    id: 10,
    name: "Github",
    category: "version control",
    Icon: BsGithub,
  },
];

export const certificates = [
  {
    id: 1,
    name: "Mobile Game Development",
    where: "erovoutika electronics robotics automation",
    date: "2022-02-06",
    status: "completed",
    pdf: "available",
    file: "/src/assets/certificates/cyber-security.pdf",
    filename: "cyber-security.pdf",
  },
  // {
  //   id: 2,
  //   name: "Foundations of User Experience (UX) Design",
  //   where: "coursera",
  //   date: "2022-03-14",
  //   status: "completed",
  //   pdf: "not available",
  //   file: "",
  //   filename: "",
  // },
  {
    id: 3,
    name: "Web Development Tooling",
    where: "mindanao state university - general santos city",
    date: "2022-03-16",
    status: "completed",
    pdf: "available",
    file: "/src/assets/certificates/mobile-game-development.pdf",
    filename: "mobile-game-development.pdf",
  },
  {
    id: 4,
    name: "Career Guide to Cyber Security",
    where: "coursera",
    date: "2022-04-03",
    status: "completed",
    pdf: "available",
    file: "/src/assets/certificates/cyber-security.pdf",
    filename: "cyber-security.pdf",
  },
];

export const service = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I can build interactive Web Applications using NextJS and Tailwind CSS",
    desc_more:
      "Have a moderate understanding in HTML, CSS and Javascript which are the basic fundamental technologies in developing frontend features for Single Page Application/SPA",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    description:
      "Capable at Prototyping and Designing modern UI interaface with Adobe XD and Figma",
    desc_more:
      "Designing is my first love since I develop the basic approach through Photoshop",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "My next goal... probably",
    desc_more: "",
  },
  {
    id: 4,
    title: "When I'm not designing",
    description: "...",
    desc_more: [
      "cleaning/fixing my i3 machine",
      "playing video games",
      "listening to Doja Cat - You Right",
      "watching Music Videos",
      "watching dance practice videos",
      "watching Kdrama",
      "getting stuck in Youtube Shorts for 3 hours",
    ],
  },
];
