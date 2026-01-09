import {Project, SkillsType} from "./info.types"
import pop from "../assets/images/screenshots/pop.png"
import quoridor from "../assets/images/screenshots/quoridor.png"
import nt from "../assets/images/screenshots/nt.png"
import nlp from "../assets/images/screenshots/nlp.png"
import segmentation from "../assets/images/screenshots/segmentation.png"
import wordgame from "../assets/images/screenshots/wordgame.png"
import pop_mobile from "../assets/images/screenshots/pop-mobile.jpg"
import quoridor_mobile from "../assets/images/screenshots/quoridor-mobile.png"
import nt_mobile from "../assets/images/screenshots/nt-mobile.jpg"
import segmentation_mobile from "../assets/images/screenshots/segmentation-mobile.png"
import wordgame_mobile from "../assets/images/screenshots/wordgame-mobile.png"
import mines from "../assets/images/screenshots/mines.gif"
import mines_mobile from "../assets/images/screenshots/mines-mobile.gif"
import mlbusiness from "../assets/images/screenshots/mlbusiness.png"
import segmentationpointcloud from "../assets/images/screenshots/segmentation-pointcloud.png"
import plantguardian from "../assets/images/screenshots/plantguardian.jpg"
import plantguardianmobile from "../assets/images/screenshots/plantguardian-mobile.jpg"

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

//about
export const about: string = `
    <h3>Hi, I'm <b><span  style="color: var(--orange)">Michele Pulvirenti</span></b> <br/>
    I'm a <span style="color: var(--pink)">Computer Engineer</span></h3>
    <p>I graduated with a Bachelor’s degree in Computer Engineering and a Master’s degree in Artificial Intelligence and Data Analytics from the Polytechnic of Turin</p>
    <p>I've also done a one year Erasmus in Paris in Data & AI at ESILV - Pole Leonard de Vinci.</p>
    <p>I do artistic gymnastics and I like to draw, both on paper and digitally.</p>
    <p style="flex:1 1 100%;text-align:center;">Check out my drawings in the <a href="/art" class="link">art section</a></p>`

//Contacts
//export const phone: number = 1111111111
export const email: string = "pulvirentimichele00@gmail.com"
export const linkedin: string = "https://www.linkedin.com/in/michele-pulvirenti"
export const github: string = "https://github.com/Mikecheek"

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
  MLCV = "ML - CV",
  MLNLP = "ML - NLP",
  WEB = "Web",
  LOW = "Low Level",
}

export const projectsList: Project[] = [
  {
    id: "plantguardian",
    title: "Plant Guardian (in progress)",
    image: plantguardian,
    image_mobile: plantguardianmobile,
    description: `A mobile application for monitoring and taking care of indoor plants.<br/><br/>
    The application combines the use of Computer Vision techniques to identify plant species and an AI Agent with LLM model to provide personalized care advice based on user input and environmental data.`,
    technologies: ["Flutter", "Dart", "Python", "OpenCV"],
    tools: ["Computer Vision", "AI Agents", "Large Language Models"],
    category: P_CATEGORY.MLCV,
    github: "https://github.com/MikeCheek/plant_guardian",
  },
  {
    id: "segmentationpointcloud",
    title: "Segmentation of Heritage Building Point Clouds",
    image: segmentationpointcloud,
    image_mobile: segmentationpointcloud,
    description: `Development of a computer program for segmenting point clouds of old monuments.<br/><br/>
    The final program implements 2 segmentation approaches:
    <ul>
    <li>A segmentation completer where a Machine Learning classifier is trained on a partially segmented part of a point cloud and used to propagate the segmentation</li>
    <li>A neural network model that was trained on a dataset is used to segment unlabelled point clouds</li>
    </ul>
    This project was developed during my internship at A-BIME in Paris and served as the core subject of my Master's thesis.`,
    technologies: ["Python", "PyTorch", "scikit-learn", "PyQt6"],
    tools: ["Computer Vision", "Point Cloud Segmentation", "PointNet++", "DGCNN"],
    category: P_CATEGORY.MLCV,
    href: "https://webthesis.biblio.polito.it/37726/",
    hrefText: "Thesis Document",
  },
  {
    id: "segmentationunderwater",
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
    tools: ["Computer Vision", "Segmentation models"],
    category: P_CATEGORY.MLCV,
  },
  {
    id: "nlprecommendation",
    title: "TripAdvisor Recommendation Challenge",
    image: nlp,
    image_mobile: nlp,
    description: `A machine learning project focused on building a recommendation system for TripAdvisor reviews. 
    Starting with a BM25 baseline, advanced NLP models like BERT and Sentence Transformers were tested, with Roberta achieving the best results.<br/><br/>
      Preprocessing included language filtering, tokenization, and lemmatization to enhance data quality. An ensemble learning approach combined model outputs to improve recommendation accuracy.<br/><br/>
      Project developed for Machine Learning for NLP course at ESILV.`,
    github: "https://github.com/MikeCheek/Project1-MachineLearningForNLP",
    technologies: ["Python", "NumPy", "Pandas", "nltk", "PyTorch"],
    tools: ["Natural Language Processing", "Ensemble Learning"],
    category: P_CATEGORY.MLNLP,
  },
  {
    id: "minerecognition",
    title: "Mine Recognition",
    image: mines,
    image_mobile: mines_mobile,
    description: `Training of a YOLO-based model designed to recognize a custom mine (PFM-1).<br/><br/>
    We created a dedicated photo dataset by 3D printing the PFM-1 mine and capturing images to feed the YOLO model.<br/><br/>
    The project involved dataset creation, annotation, model training, and evaluation for robust object detection.`,
    github: "https://github.com/MikeCheek/mine-recognition",
    technologies: ["Python", "YOLO"],
    tools: ["Computer Vision", "Object Detection"],
    category: P_CATEGORY.MLCV,
  },
  {
    id: "mlbusinessassistant",
    title: "ML-powered Business Assistant Chatbot",
    image: mlbusiness,
    image_mobile: mlbusiness,
    description: `ML-powered business assistant implemented as a chatbot in a Streamlit app.<br/><br/>
    At its core, the system uses NLP techniques with a fine-tuned DistilBERT classifier trained on a custom dataset to recognize six business-related intents, such as generating LinkedIn notes, researching B2B accounts, and extracting company value propositions.<br/><br/>
    spaCy was integrated for preprocessing and keyword extraction, while pre-trained transformer models were used for sentiment analysis and question answering.<br/>
    A T5-small model was fine-tuned to generate personalized LinkedIn connection notes. Real-time company research was enabled via APIs and web scraping (LinkedIn, News APIs, Google Search, BeautifulSoup, Selenium).<br/><br/>
    For a deeper explanation, see <a href="https://github.com/MikeCheek/ML-Tool-for-business/blob/main/ML_Tool_Explanation.pdf" class="link" target="_blank" rel="noopener noreferrer">the project documentation</a>.`,
    github: "https://github.com/MikeCheek/ML-Tool-for-business",
    technologies: ["Python", "Streamlit", "spaCy", "Transformers", "BeautifulSoup", "Selenium"],
    tools: ["Natural Language Processing", "Web Scraping", "API Integration"],
    category: P_CATEGORY.MLNLP,
  },
  {
    id: "naturalmentetecnologici",
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
    id: "quoridorlandtiger",
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
    id: "popfunding",
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
    id: "wordgame",
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
