import React from "react"
import styles from "./index.module.scss"
import {ButtonProps} from "./index.types"

const Index = ({title, href, onMouseEnter, onMouseLeave, children, internal = false}: ButtonProps) => {
  return (
    <a
      title={title}
      href={href}
      className={styles.button}
      onMouseEnter={(e) => (onMouseEnter ? onMouseEnter(e) : {})}
      onMouseLeave={onMouseLeave}
      target={internal ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  )
}

export default Index
