import {SkillsType} from './info.types'

//head
export const introduce = `/*welcome to my portfolio*/`
export const commands = [
  {
    auto: true,
    input: `cat introduction.txt`,
    output: `<p>Hi, this is a work in progress <br/>Try to interact with me (drag, close, resize)</p>`,
  },
  {auto: false, input: '', output: `Nice try, but I'm still working on this feature`},
]

//other experiences
export const otherExperiences = [
  {
    title: 'JEISM - JE Italy Summer Meeting (2021)',
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
    title: 'SysE2021 - Summer School (2021)',
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
    <br/>In my first year, I decided to work there because I wanted to immediately take advantage of the opportunities that the university offered</p>
    <p>In my spare time, I like to draw, both on paper and digitally, and I also do acrobatic gymnastics</p>
    <p>Try clicking on the section icon!</p>`

//work experiences
export const works: string = `<strong><h3><a title="JEToP" class="link" href="https://jetop.com">JEToP - Junior Enterprise Torino Politecnico</a></h3></strong>(October 2019 - Today)<br/><br/>
    <h4>Role: IT Consultant</h4>
    <p>As a member of <strong>teams</strong> on both internal and external projects, 
      <strong>I have increased my knowledge</strong> of web programming by developing websites with frameworks 
      like <strong>React, Gatsby and NextJS</strong> and have improved my backend skills through training.<br/> 
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
    name: 'Politecnico di Torino',
    dateStart: '2019/09',
    dateEnd: 'Today',
    text: ` -> Bachelor's degree<br/>
                -> Ingegneria Informatica`,
  },
  {
    name: `High school "Archimede" - Acireale`,
    dateStart: '2013/09',
    dateEnd: '2019/06',
    text: ` -> High school diploma`,
  },
]

//Contacts
//export const phone: number = 1111111111
export const email: string = 'michele00.pulvirenti@gmail.com'
export const linkedin: string = 'https://www.linkedin.com/in/michele-pulvirenti'
export const github: string = 'https://github.com/Mikecheek'

//skills
export const programming: SkillsType = [
  {
    name: 'C',
    percentage: '90%',
  },
  {
    name: 'Java',
    percentage: '80%',
  },
  {
    name: 'Javascript',
    percentage: '90%',
  },
  {
    name: 'Assembly MIPS',
    percentage: '70%',
  },
  {
    name: 'Bash (Unix shell)',
    percentage: '70%',
  },
  {
    name: 'PHP',
    percentage: '30%',
  },
]
export const frameworks: SkillsType = [
  {
    name: 'React Js',
    link: 'https://it.reactjs.org',
  },
  {
    name: 'Gatsby Js',
    link: 'https://www.gatsbyjs.com',
  },
  {
    name: 'Next Js',
    link: 'https://nextjs.org',
  },
]
export const others: SkillsType = [
  {
    name: 'HTML',
    percentage: '90%',
  },
  {
    name: 'CSS',
    percentage: '90%',
  },
  {
    name: 'Sass',
    link: 'https://sass-lang.com',
  },
  {
    name: 'Linux',
    percentage: '80%',
  },
  {
    name: 'SQL',
    percentage: '80%',
  },
  {
    name: 'MatLab',
    link: 'https://it.mathworks.com/products/matlab.html',
  },
  {
    name: 'Simulink',
    link: 'https://it.mathworks.com/products/simulink.html',
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
    text: 'About',
    path: '#about',
    isHref: true,
  },
  {
    text: 'Works',
    path: '#works',
    isHref: true,
  },
  {
    text: 'Skills',
    path: '#skills',
    isHref: true,
  },
  {
    text: 'Education',
    path: '#education',
    isHref: true,
  },
  {
    text: 'Other',
    path: '#others',
    isHref: true,
  },
  {
    text: 'Contacts',
    path: '#contacts',
    isHref: true,
  },
]
