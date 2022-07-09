import React, {useEffect, useState} from 'react'
import * as styles from './card.module.scss'
import {CardProps} from './card.types'
import {parser} from 'html-metadata-parser'
import GitHub from '../../assets/github.svg'
import {Design, Develop} from '../legend/legend'

const Card = ({
  children,
  href,
  title,
  description,
  github,
  favicon = '/favicon.ico',
  designed,
  developed,
}: CardProps) => {
  const [desc, setDescription] = useState<string>(description ?? '')
  const [tit, setTitle] = useState<string>(title ?? '')
  useEffect(() => {
    if (!title && !description)
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
      {designed || developed ? (
        <span className={styles.badges}>
          {designed && <Design />}
          {developed && <Develop />}
        </span>
      ) : null}
      <a href={href} target={'_blank'} rel="noopener noreferrer">
        {children}
      </a>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <svg className={styles.arc} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className={styles.subHeader}>
            <img className={styles.favicon} src={href + favicon} alt={title + ' favicon'} />
            <h3 className={styles.title}>{tit}</h3>
            {github ? (
              <a href={github} target={'_blank'} rel={'noopener noreferrer'} title={title + ' Repo'}>
                <GitHub width={50} height={50} className={styles.favicon} fill={'var(--black)'} />
              </a>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <p className={styles.description}>{desc}</p>
      </div>
    </span>
  )
}

export default Card
