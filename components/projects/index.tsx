import Image from "next/image"
import React, {useContext} from "react"
import CursorContext from "../../utilities/useCursorContext"
import styles from "./index.module.scss"
import projectsList from "./data"

const Index = () => {
  const {fitElement, unFit} = useContext(CursorContext)

  const handleMouseHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    fitElement(e.currentTarget)
  }
  const handleMouseLeave = () => {
    unFit()
  }

  return (
    <div className={styles.projects}>
      {projectsList.map((project, key) => {
        return (
          <div className={key % 2 == 1 ? styles.projectReverse : styles.project} key={key}>
            <div className={styles.head}>
              <h3>{project.title}</h3>
              <em dangerouslySetInnerHTML={{__html: project.description}}></em>
              <div className={styles.imageMobileWrap}>
                <Image
                  src={project.image_mobile}
                  alt={project.title}
                  className={styles.imageMobile}
                  style={project.reduce_opacity ? {opacity: 0.4} : {}}
                  loading={"lazy"}
                  quality={50}
                />
              </div>

              <div className={styles.links}>
                <a
                  onMouseOver={(e) => handleMouseHover(e)}
                  onMouseEnter={(e) => handleMouseHover(e)}
                  onMouseOut={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buttonStyle"
                >
                  Visit Website
                </a>
                {project.github && (
                  <a
                    onMouseOver={(e) => handleMouseHover(e)}
                    onMouseEnter={(e) => handleMouseHover(e)}
                    onMouseOut={handleMouseLeave}
                    onMouseLeave={handleMouseLeave}
                    href={project.github}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    className="buttonStyle"
                  >
                    Visit Repo
                  </a>
                )}
              </div>
            </div>
            <div className={styles.desktopWrap}>
              <a className={styles.imageWrap} href={project.href} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt={project.title} className={styles.image} loading={"lazy"} quality={50} />
              </a>
              <div className={styles.stand}></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Index
