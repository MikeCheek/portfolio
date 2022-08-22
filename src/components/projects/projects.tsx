import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.projects}>
      {projectsList.map((project, key) => {
        return (
          <div className={key % 2 == 1 ? styles.projectReverse : styles.project} key={key}>
            <div className={styles.head}>
              <h3>{project.title}</h3>
              <i dangerouslySetInnerHTML={{__html: project.description}}></i>

              {project.imageMobile}

              <div className={styles.links}>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="buttonStyle">
                  Visit Website
                </a>
                {project.github && (
                  <a href={project.github} target={'_blank'} rel={'noopener noreferrer'} className="buttonStyle">
                    Visit Repo
                  </a>
                )}
              </div>
            </div>

            {project.image}
          </div>
        )
      })}
    </div>
  )
}

const projectsList = [
  {
    title: 'Pop! Funding',
    description: `A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate<br/><br/>
    This is the Project Work proposed by Algorand to the attendees of MasterZ 2nd Edition.<br/><br/>
    Doing this Project Work we had the opportunity to test and improve our knowledge of the Algorand blockchain and to learn how to use it in the development of a crowdfunding platform. `,
    href: 'https://pop-funding.vercel.app',
    github: 'https://github.com/MikeCheek/pop-funding',
    image: (
      <StaticImage
        placeholder="blurred"
        className={styles.image}
        src="../../images/screenshots/pop.png"
        alt={'Pop! Funding'}
      />
    ),
    imageMobile: (
      <StaticImage
        placeholder="blurred"
        className={styles.imageMobile}
        src="../../images/screenshots/pop-mobile.jpg"
        alt={'Pop! Funding'}
      />
    ),
  },
  {
    title: 'Naturalmente Tecnologici',
    description: `Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)<br/><br/>
      During the event there were conferences and workshops on the theme of ethical and sustainable technological development in social and environmental terms.`,
    href: 'https://nt.syskrack.org',
    github: 'https://github.com/MikeCheek/naturalmente-tecnologici',
    image: (
      <StaticImage
        placeholder="blurred"
        className={styles.image}
        src="../../images/screenshots/nt.png"
        alt={'Naturalmente Tecnologici'}
      />
    ),
    imageMobile: (
      <StaticImage
        placeholder="blurred"
        className={styles.imageMobile}
        src="../../images/screenshots/nt-mobile.jpg"
        alt={'Naturalmente Tecnologici'}
        style={{opacity: 0.5}}
      />
    ),
  },
  {
    title: 'Web Dev Challenge 2022',
    description: `Website created on the occasion of the Web Dev Challenge event organized by JEToP<br/><br/>
                The challenge was to develop in team a landing page on a specific theme`,
    href: 'https://wdc.jetop.com',
    image: (
      <StaticImage
        placeholder="blurred"
        className={styles.image}
        src="../../images/screenshots/wdc.png"
        alt={'Web Dev Challenge 2022'}
      />
    ),
    imageMobile: (
      <StaticImage
        placeholder="blurred"
        className={styles.imageMobile}
        src="../../images/screenshots/wdc-mobile.jpg"
        alt={'Web Dev Challenge 2022'}
      />
    ),
  },
]

export default Projects
