import {Project, SkillsType} from "./info.types"
import pop from "../assets/images/screenshots/pop.png"
import quoridor from "../assets/images/screenshots/quoridor.png"
import nt from "../assets/images/screenshots/nt.png"
import wdc from "../assets/images/screenshots/wdc.png"
import nlp from "../assets/images/screenshots/nlp.png"
import segmentation from "../assets/images/screenshots/segmentation.png"
import wordgame from "../assets/images/screenshots/wordgame.png"
import pop_mobile from "../assets/images/screenshots/pop-mobile.jpg"
import quoridor_mobile from "../assets/images/screenshots/quoridor-mobile.png"
import nt_mobile from "../assets/images/screenshots/nt-mobile.jpg"
import wdc_mobile from "../assets/images/screenshots/wdc-mobile.jpg"
import segmentation_mobile from "../assets/images/screenshots/segmentation-mobile.png"
import wordgame_mobile from "../assets/images/screenshots/wordgame-mobile.png"

//head
export const introduce = `/*welcome to my portfolio*/`
export const commands = [
  {
    auto: true,
    input: `cat introduction.txt`,
    output: `<p>Hi, this is a work in progress <br/>Try to interact with me (drag, close, resize)</p>`,
  },
  {auto: false, input: "", output: `Nice try, but I'm still working on this feature`},
]

//other experiences
export const otherExperiences = [
  {
    title: "JEISM - JE Italy Summer Meeting (2021)",
    text: `// Event between Italian Junior Enterprises<br/><br/>
                // Location: Gabicce, Marche<br/><br/>
                // Duration: 3 days<br/><br/>
                    The event provided an <strong>excellent opportunity</strong> 
                    for discussion with guys from <strong>different</strong> Junior Enterprises, 
                    as well as getting to know the <strong>partner companies</strong> of the event through daily workshops.
                <br/>
                    A stimulating workshop was organized by Open
                    Marketplace on the theme of Open Innovation`,
  },
  {
    title: "SysE2021 - Summer School (2021)",
    text: `/* Master's degree orientation event
                        organized by the University of Genova in
                        collaboration with the University of Savoie Mont
                        Blanc and carried out in English */<br/><br/>
                // Location: Imperia, Liguria<br/><br/>
                // Duration: 5 days<br/><br/>
                        Thanks to the <strong>Hackathon</strong> held during the event, 
                        I <strong>gained experience</strong> with scientific calculation 
                        languages such as Matlab and Simulink`,
  },
]

//about
export const about: string = `
    <h3>Hi, I'm <b><span  style="color: var(--orange)">Michele Pulvirenti</span></b> <br/>
    I'm a <span style="color: var(--pink)">Computer Engineer</span></h3>
    <p>I am enrolled in Artificial Intelligence and Data Analytics course at Polytechnic of Turin.</p>
    <p>Currently, I am in Paris for a one year Erasmus in Data & AI at ESILV - Pole Leonard de Vinci.</p>
    <p>I do artistic gymnastics and I like to draw, both on paper and digitally.</p>`

//work experiences
export const works: string = `<strong><h3><a title="JEToP Website" class="link" href="https://jetop.com">JEToP - Junior Enterprise Torino Politecnico</a></h3></strong>(October 2019 - Now)<br/><br/>
    <h4>Role: IT Consultant</h4>
    <p>As a member of <strong>teams</strong> on both internal and external projects, 
      <strong>I have increased my knowledge</strong> of web programming by developing websites with frameworks 
      like <strong>ReactJs, GatsbyJs and NextJs</strong> and have improved my backend skills through training.<br/> 
      <br/><br/>
    </p>
    <h4>Role: Collaborator of IT Area</h4>
    <br/>
    
    <h4><strong>[Examples of things I've contributed to develop]</strong></h4>
    <p>Blog section of the association's website (<a title="JEToP Blog" class="link" href="https://jetop.com/blog">https://jetop.com/blog</a>)</p>
    <p>Web Dev Challenge landing page (<a  title="JEToP WDC" class="link" href="https://wdc.jetop.com">https://wdc.jetop.com</a>)</p>
    `

//education
export const events = [
  {
    name: "Politecnico di Torino",
    dateStart: "2019/09",
    dateEnd: "Now",
    text: ` -> Bachelor's degree<br/>
                -> Computer Engeneering`,
  },
  {
    name: `High school "Archimede" - Acireale`,
    dateStart: "2013/09",
    dateEnd: "2019/06",
    text: ` -> High school diploma`,
  },
]

//Contacts
//export const phone: number = 1111111111
export const email: string = "pulvirentimichele00@gmail.com"
export const linkedin: string = "https://www.linkedin.com/in/michele-pulvirenti"
export const github: string = "https://github.com/Mikecheek"

//skills
export const programming: SkillsType = [
  {
    name: "C",
    percentage: 60,
  },
  {
    name: "Java",
    percentage: 60,
  },
  {
    name: "Rust",
    percentage: 70,
  },
  {
    name: "JavaScript",
    percentage: 95,
  },
  {
    name: "Typescript",
    percentage: 95,
  },
  {
    name: "Assembly MIPS/ARM",
    percentage: 50,
  },
  {
    name: "Bash (Unix)",
    percentage: 70,
  },
  {
    name: "PHP",
    percentage: 20,
  },
]
export const frameworks: SkillsType = [
  {
    name: "React Js",
    link: "https://it.reactjs.org",
    percentage: 90,
  },
  {
    name: "Gatsby Js",
    link: "https://www.gatsbyjs.com",
    percentage: 90,
  },
  {
    name: "Next Js",
    link: "https://nextjs.org",
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com",
    percentage: 80,
  },
]
export const others: SkillsType = [
  {
    name: "HTML",
    percentage: 90,
  },
  {
    name: "CSS",
    percentage: 90,
  },
  {
    name: "Sass",
    link: "https://sass-lang.com",
    percentage: 70,
  },
  {
    name: "Linux",
    percentage: 60,
  },
  {
    name: "SQL",
    percentage: 40,
  },
]
export const languages = `
    <h3>Languages</h3>
    <p>Italian (mother tongue)</p>
    <p>English (B2 Cambridge First Certificate)</p>
`

//navBar
export const navItems = [
  //{
  //    text: "Home", path: "/"
  //},
  {
    text: "About",
    path: "#about",
    isHref: true,
  },
  {
    text: "Works",
    path: "#works",
    isHref: true,
  },
  {
    text: "Skills",
    path: "#skills",
    isHref: true,
  },
  {
    text: "Education",
    path: "#education",
    isHref: true,
  },
  {
    text: "Other",
    path: "#others",
    isHref: true,
  },
  {
    text: "Contacts",
    path: "#contacts",
    isHref: true,
  },
]

export enum P_CATEGORY {
  ML = "Machine Learning",
  WEB = "Web Developing",
  LOW = "Low Level Programming",
}

export const projectsList: Project[] = [
  {
    title: "Semantic Segmentation of Underwater Imagery",
    image: segmentation,
    image_mobile: segmentation_mobile,
    description: `This project focuses on developing a multi-class segmentation algorithm for underwater images.<br/><br/>
    The U-Net model was used and enhanced by incorporating a dropout mechanism to mitigate overfitting.<br/>
    Various images manipulation techniques were applied to calculate database statistics and to improve the data through preprocessing and augmentation.<br/><br/>
    
    Project developed for Machine Learning for CV course at ESILV.`,
    github: "https://github.com/MikeCheek/Semantic-Segmentation-of-Underwater-Imagery",
    video: require("../assets/videos/segmented-very-low.mp4"),
    technologies: ["Python", "OpenCV", "PyTorch", "MatplotLib", "NumPy"],
    tools: ["Machine Learning for Computer Vision", "Segmentation models"],
    category: P_CATEGORY.ML,
  },
  {
    title: "TripAdvisor Recommendation Challenge",
    image: nlp,
    image_mobile: nlp,
    description: `A machine learning project focused on building a recommendation system for TripAdvisor reviews. 
    Starting with a BM25 baseline, advanced NLP models like BERT and Sentence Transformers were tested, with Roberta achieving the best results.<br/><br/>
      Preprocessing included language filtering, tokenization, and lemmatization to enhance data quality. An ensemble learning approach combined model outputs to improve recommendation accuracy.<br/><br/>
      Project developed for Machine Learning for NLP course at ESILV.`,
    github: "https://github.com/MikeCheek/Project1-MachineLearningForNLP",
    technologies: ["Python", "NumPy", "Pandas", "nltk", "PyTorch"],
    tools: ["Machine Learning for NLP", "Ensemble Learning"],
    category: P_CATEGORY.ML,
  },
  {
    title: "Naturalmente Tecnologici",
    image: nt,
    image_mobile: nt_mobile,
    description: `Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)<br/><br/>
      During the event there were conferences and workshops on the theme of ethical and sustainable technological development in social and environmental terms.<br/><br/>
      In the background is implemented a working <a href="https://en.wikipedia.org/wiki/Flocking" class="link" rel="noopener noreferrer" alt="Flocking simulation">Flocking simulation</a> (to be activated by clicking on "Animate Background")`,
    href: "https://nt.syskrack.org",
    github: "https://github.com/MikeCheek/naturalmente-tecnologici",
    video: require("../assets/videos/nt-new.mp4"),
    technologies: ["GatsbyJs", "Typescript", "Sass"],
    tools: ["FTP Deploy Action"],
    category: P_CATEGORY.WEB,
  },
  {
    title: "Quoridor - LandTiger",
    image: quoridor,
    image_mobile: quoridor_mobile,
    description: `Project developed for the extrapoint of "Architetture dei sistemi di elaborazione" course at Politecnico di Torino 2023/2024.<br/><br/>
The aim of the project was to acquire full confidence in using the KEIL software debug environment to emulate the behaviour of the LPC1768 and the LANDTIGER board.<br/><br/>
To achieve this result we were asked to develop a working reprodution of the Quoridor game.`,
    github: "https://github.com/MikeCheek/ASE-Extrapoint-1-Quoridor",
    video: require("../assets/videos/quoridor.mp4"),
    technologies: ["C", "ARM Assembly"],
    tools: ["Keil"],
    category: P_CATEGORY.LOW,
  },
  {
    title: "Pop! Funding",
    image: pop,
    image_mobile: pop_mobile,
    description: `A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate<br/><br/>
    This is the Project Work proposed by Algorand to the attendees of MasterZ 2nd Edition.<br/><br/>
    Doing this Project Work we had the opportunity to test and improve our knowledge of the Algorand blockchain and to learn how to use it in the development of a crowdfunding platform.<br/><br/>
    Visit the site and try to click on bubbles!`,
    href: "https://pop-funding.vercel.app",
    github: "https://github.com/MikeCheek/pop-funding",
    video: require("../assets/videos/pop-low.mp4"),
    technologies: ["NextJs", "Typescript", "TailwindCSS"],
    tools: ["ESLint", "Prettier"],
    category: P_CATEGORY.WEB,
  },
  // {
  //   title: "Web Dev Challenge 2022",
  //   image: wdc,
  //   image_mobile: wdc_mobile,
  //   description: `Website created to show all info of the Web Dev Challenge event organized by JEToP<br/><br/>
  //               In the challenge, teams were required to create landing pages on a specific topic<br/><br/>
  //               Have a look also at the <a title="JEToP WDC Thanks" href="https://wdc.jetop.com/thanks" class="link" rel="noopener noreferrer" target="_blank">thanks page</a>`,
  //   href: "https://wdc.jetop.com",
  //   technologies: ["NextJs", "Typescript", "TailwindCSS"],
  //   tools: ["Husky", "ESLint", "Prettier"],
  // },
  {
    title: "Word Game",
    image: wordgame,
    image_mobile: wordgame_mobile,
    description: `WebApp developed for fun and to try something new<br/><br/>
                It is a simple guess the hidden word game and you can play in english or in italian<br/><br/>
                This webapp is also a PWA, so you can install it and play offline<br/><br/>
                When you guess the word, you can also see its definition (only available in English).
                It's a great way to play and learn at the same time!`,
    href: "https://mikecheek.github.io/wordgame",
    github: "https://github.com/MikeCheek/wordgame",
    technologies: ["GatsbyJs", "Typescript", "Sass"],
    category: P_CATEGORY.WEB,
  },
]
