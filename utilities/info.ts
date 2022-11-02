import {SkillsType} from "./info.types"
import pop from "../assets/images/screenshots/pop.png"
import nt from "../assets/images/screenshots/nt.png"
import wdc from "../assets/images/screenshots/wdc.png"
import pop_mobile from "../assets/images/screenshots/pop-mobile.jpg"
import nt_mobile from "../assets/images/screenshots/nt-mobile.jpg"
import wdc_mobile from "../assets/images/screenshots/wdc-mobile.jpg"

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
    I'm a <span style="color: var(--pink)">developer</span></h3>
    <p>Having been fascinated with computers since I was a child,<br/>
    I am studying computer engineering at the Polytechnic of Turin.</p>
    <p>I am currently working at <a title="JEToP" class="link" href="https://jetop.com">JEToP</a>, a student no-profit organization.
    <br/>I decided to work there because I wanted to immediately take advantage of the opportunities that the university offered</p>
    <p>In my spare time, I like to draw, both on paper and digitally, and I also do acrobatic gymnastics</p>`

//work experiences
export const works: string = `<strong><h3><a title="JEToP" class="link" href="https://jetop.com">JEToP - Junior Enterprise Torino Politecnico</a></h3></strong>(October 2019 - Now)<br/><br/>
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
export const email: string = "michele00.pulvirenti@gmail.com"
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
    name: "JavaScript",
    percentage: 95,
  },
  {
    name: "Typescript",
    percentage: 95,
  },
  {
    name: "Assembly MIPS",
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

export const projectsList = [
  {
    title: "Pop! Funding",
    image: pop,
    image_mobile: pop_mobile,
    description: `A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate<br/><br/>
    This is the Project Work proposed by Algorand to the attendees of MasterZ 2nd Edition.<br/><br/>
    Doing this Project Work we had the opportunity to test and improve our knowledge of the Algorand blockchain and to learn how to use it in the development of a crowdfunding platform. `,
    href: "https://pop-funding.vercel.app",
    github: "https://github.com/MikeCheek/pop-funding",
  },
  {
    title: "Naturalmente Tecnologici",
    image: nt,
    image_mobile: nt_mobile,
    description: `Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)<br/><br/>
      During the event there were conferences and workshops on the theme of ethical and sustainable technological development in social and environmental terms.`,
    href: "https://nt.syskrack.org",
    github: "https://github.com/MikeCheek/naturalmente-tecnologici",
    reduce_opacity: true,
  },
  {
    title: "Web Dev Challenge 2022",
    image: wdc,
    image_mobile: wdc_mobile,
    description: `Website created on the occasion of the Web Dev Challenge event organized by JEToP<br/><br/>
                The challenge was to develop in team a landing page on a specific theme<br/><br/>
                Have a look also at the <a href="https://wdc.jetop.com/thanks" class="link" rel="noopener noreferrer" target="_blank">thanks page</a>`,
    href: "https://wdc.jetop.com",
  },
]
