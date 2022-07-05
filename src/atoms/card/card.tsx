import React, {useEffect, useState} from 'react'
import * as styles from './card.module.scss'
import {CardProps} from './card.types'
import {parser} from 'html-metadata-parser'

const Card = ({children, href, title = '', description = '', favicon = '/favicon.ico'}: CardProps) => {
  const [desc, setDescription] = useState<string>(description)
  const [tit, setTitle] = useState<string>(title)
  useEffect(() => {
    parser(href)
      .then((result) => {
        setDescription(result['meta']['description'] ?? '')
        setTitle(result['meta']['title'] ?? '')
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <span className={styles.card}>
      <a href={href} target={'_blank'} rel="noopener noreferrer">
        {children}
      </a>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className={styles.subHeader}>
            <img width={50} height={50} className={styles.favicon} src={href + favicon} alt={title + ' favicon'} />
            <h3 className={styles.title}>{tit}</h3>
          </div>
        </div>
        <p className={styles.description}>{desc}</p>
      </div>
    </span>
  )
}

export default Card
