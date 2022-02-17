import { SkillsType } from './info.types'

//head
export const introduce = `/*let me introduce myself*/`
export const typing = `Hi, I'm Michele Pulvirenti.`

//other experiences
export const otherExperiences = [
    {
        title: 'JEISM - JE Italy Summer Meeting (2021)',
        text: `// Event between Italian Junior Enterprises<br/><br/>
                // Location: Gabicce, Marche<br/><br/>
                // Duration: 3 days<br/><br/>
                /*<br/> It was a <strong>great opportunity</strong> to discuss with guys
                    from <strong>different</strong> Junior Enterprises and for getting
                    to know the <strong>partner companies</strong> of the event
                    through daily workshops.<br/>
                    A stimulating workshop was organized by Open
                    Marketplace on the theme of Open Innovation <br/>*/`,
    },
    {
        title: 'SysE2021 - Summer School (2021)',
        text: `/* Orientation event on the Master's degree
                        organized by the University of Genova in
                        collaboration with University of Savoie Mont
                        Blanc and carried out in English */<br/><br/>
                // Location: Imperia, Liguria<br/><br/>
                // Duration: 5 days<br/><br/>
                /*<br/> Thanks to the <strong>Hackathon</strong> held during the event,
                    I <strong>improved my knowledge skills</strong> of scientific
                    calculation language such as Matlab and Simulink <br/>*/`,
    },
]

//about
export const about: string = `<p>Since I was a child I have always had a passion for everything there is computer science,<br/>
    so I'm attending the third year of studies in Computer Engineering at the Polytechnic of Turin.</p>
    <p>In my spare time I like to draw both on paper and digitally and I do acrobatic gymnastics</p>`

//work experiences
export const works: string = `<strong>JEToP - Junior Enterprise of Politecnico di Torino</strong><br/><br/>
    -> From October 2019 to today<br/><br/>
    -> Role: IT Consultant<br/><br/>
    Working in <strong>teams</strong> on both internal and external
          projects, <strong>I have expanded my knowledge of web
          programming</strong> by developing sites with
          frameworks like <strong>React</strong> and <strong>Gatsby</strong> and through
          trainings I improved backend skills.<br/>
          For example, I developed the Blog section of the
          association's website (<a id="link" href="https://jetop.com/blog">https://jetop.com/blog</a>)`

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
export const github: string = 'https://github.com/Mike-cheek'

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
        name: 'React',
        percentage: '90%',
    },
    {
        name: 'Gatsby',
        percentage: '80%',
    },
    {
        name: 'NextJs',
        percentage: '50%',
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
        name: 'Linux',
        percentage: '80%',
    },
    {
        name: 'SQL',
        percentage: '80%',
    },
    {
        name: 'MatLab',
        percentage: '50%',
    },
    {
        name: 'Simulink',
        percentage: '50%',
    },
]
export const languages = `
    <h3>Languages</h3>
    <p>Italian (mothertongue)</p>
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