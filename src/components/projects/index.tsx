import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './index.module.scss'
import {Data, Edge} from './index.types'

const Index = () => {
  const data: Data = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/assets/images/screenshots/"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles.projects}>
      {projectsList.map((project, key) => {
        return (
          <div className={key % 2 == 1 ? styles.projectReverse : styles.project} key={key}>
            <div className={styles.head}>
              <h3>{project.title}</h3>
              <em dangerouslySetInnerHTML={{__html: project.description}}></em>

              <GatsbyImage
                image={
                  data.allFile!.edges.filter((edge: Edge) => edge.node.name === `${project.image}-mobile`)[0].node
                    .childImageSharp.gatsbyImageData
                }
                alt={project.title}
                className={styles.imageMobile}
                style={project.image == 'nt' ? {opacity: 0.4} : {}}
                loading={'lazy'}
                onError={() => {}}
              />

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
            <GatsbyImage
              image={
                data.allFile!.edges.filter((edge: Edge) => edge.node.name === project.image)[0].node.childImageSharp
                  .gatsbyImageData
              }
              alt={project.title}
              className={styles.image}
              loading={'lazy'}
              onError={() => {}}
            />
          </div>
        )
      })}
    </div>
  )
}

const projectsList = [
  {
    title: 'Pop! Funding',
    image: 'pop',
    description: `A working crowdfunding web application based on Algorand Blockchain where anyone with Algo can create a funding or donate<br/><br/>
    This is the Project Work proposed by Algorand to the attendees of MasterZ 2nd Edition.<br/><br/>
    Doing this Project Work we had the opportunity to test and improve our knowledge of the Algorand blockchain and to learn how to use it in the development of a crowdfunding platform. `,
    href: 'https://pop-funding.vercel.app',
    github: 'https://github.com/MikeCheek/pop-funding',
  },
  {
    title: 'Naturalmente Tecnologici',
    image: 'nt',
    description: `Website created on the occasion of the Naturalmente Tecnologici event organized by the Syskrack association in Grassano (Matera)<br/><br/>
      During the event there were conferences and workshops on the theme of ethical and sustainable technological development in social and environmental terms.`,
    href: 'https://nt.syskrack.org',
    github: 'https://github.com/MikeCheek/naturalmente-tecnologici',
  },
  {
    title: 'Web Dev Challenge 2022',
    image: 'wdc',
    description: `Website created on the occasion of the Web Dev Challenge event organized by JEToP<br/><br/>
                The challenge was to develop in team a landing page on a specific theme`,
    href: 'https://wdc.jetop.com',
  },
]

export default Index
