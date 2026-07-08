import {Project} from "./info.types"
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
import termuxcmdhub from "../assets/images/screenshots/termux-cmd-hub.png"
import gpt2 from "../assets/images/screenshots/gpt2.png"
import gpt2_2 from "../assets/images/screenshots/gpt2_2.png"
import psicologialetizia from "../assets/images/screenshots/psicologialetizia.png"
import peopletracker from "../assets/images/screenshots/peopletracker_live_camera.png"
import peopletracker2 from "../assets/images/screenshots/peopletracker_list.png"
import peopletracker3 from "../assets/images/screenshots/peopletracker_smart_merge.png"
import edgecraftai from "../assets/images/screenshots/edgecraftai.png"
import edgecraftai2 from "../assets/images/screenshots/edgecraftai2.png"
import edgecraftai3 from "../assets/images/screenshots/edgecraftai3.png"

import ProjectInfo from "./projects.json"

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
<h3>Hi, I'm <b><span style="color: var(--orange)">Michele Pulvirenti</span></b> <br/>
I'm an <span style="color: var(--pink)">AI Engineer</span></h3>
    <p>I specialize in building intelligent systems, with a core focus on <b>Computer Vision deployed entirely on the edge</b>.</p>
    <p>I'm also passionate about leveraging <b>LLMs and AI agents</b> to build smarter, more autonomous development workflows and applications.</p>
    <p>When I'm not coding, you can find me doing artistic gymnastics or drawing (my works in the <a href="/art" class="link">art page</a>)</p>`

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
  MLCV = "CV",
  MLNLP = "NLP",
  LLM = "LLM",
  WEB = "Web",
  LOW = "Low Level",
}

export const P_FULLCATEGORY: {[key: string]: string} = {
  CV: "Computer Vision",
  NLP: "Natural Language Processing",
  LLM: "Large Language Models",
  Web: "Web Development",
  Low: "Low Level Programming",
}

const projectImages: {[key: string]: any} = {
  edgecraftai: {
    image: [edgecraftai, edgecraftai2, edgecraftai3],
    image_mobile: [edgecraftai, edgecraftai2, edgecraftai3],
    category: [P_CATEGORY.LOW, P_CATEGORY.MLCV, P_CATEGORY.LLM],
  },
  peopletracker: {
    image: [peopletracker, peopletracker2, peopletracker3],
    image_mobile: [peopletracker, peopletracker2, peopletracker3],
    category: P_CATEGORY.MLCV,
  },
  plantguardian: {
    image: plantguardian,
    image_mobile: plantguardianmobile,
    category: [P_CATEGORY.MLCV, P_CATEGORY.LLM],
  },
  termuxcmdhub: {
    image: termuxcmdhub,
    image_mobile: termuxcmdhub,
    category: P_CATEGORY.WEB,
  },
  gpt2fromscratch: {
    image: [gpt2, gpt2_2],
    image_mobile: [gpt2, gpt2_2],
    category: [P_CATEGORY.LLM],
  },
  segmentationpointcloud: {
    image: segmentationpointcloud,
    image_mobile: segmentationpointcloud,
    category: P_CATEGORY.MLCV,
  },
  psicologialetizia: {
    image: psicologialetizia,
    image_mobile: psicologialetizia,
    category: P_CATEGORY.WEB,
  },
  segmentationunderwater: {
    image: segmentation,
    image_mobile: segmentation_mobile,
    video: require("../assets/videos/segmented-very-low.mp4"),
    category: P_CATEGORY.MLCV,
  },
  nlprecommendation: {
    image: nlp,
    image_mobile: nlp,
    category: P_CATEGORY.MLNLP,
  },
  minerecognition: {
    image: mines,
    image_mobile: mines_mobile,
    category: P_CATEGORY.MLCV,
  },
  mlbusinessassistant: {
    image: mlbusiness,
    image_mobile: mlbusiness,
    category: P_CATEGORY.MLNLP,
  },
  naturalmentetecnologici: {
    image: nt,
    image_mobile: nt_mobile,
    video: require("../assets/videos/nt-new.mp4"),
    category: P_CATEGORY.WEB,
  },
  quoridorlandtiger: {
    image: quoridor,
    image_mobile: quoridor_mobile,
    video: require("../assets/videos/quoridor.mp4"),
    category: P_CATEGORY.LOW,
  },
  popfunding: {
    image: pop,
    image_mobile: pop_mobile,
    video: require("../assets/videos/pop-low.mp4"),
    category: P_CATEGORY.WEB,
  },
  wordgame: {
    image: wordgame,
    image_mobile: wordgame_mobile,
    category: P_CATEGORY.WEB,
  },
}

export const projectsList: Project[] = ProjectInfo.map((project: any) => ({
  ...project,
  ...(projectImages[project.id] || {}),
}))
