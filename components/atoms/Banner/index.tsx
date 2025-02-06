import React from 'react'
import styles from './index.module.scss'
import BannerProps from './index.types'

const Index = ({ text }: BannerProps) => {
  return (
    <a className={styles.banner} href={text.includes('href=') ? text.match(/href="([^"]*)"/)![1] : '#'} target="_blank" rel="noopener noreferrer">
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    </a>)
}

export default Index