import React from 'react'
import DesignSvg from '../../assets/pencil.svg'
import DevelopSvg from '../../assets/web.svg'
import * as styles from './legend.module.scss'

const Legend = () => {
  return (
    <div className={styles.legend}>
      <span>
        <Design /> = Designed by me
      </span>
      <span>
        <Develop /> = Developed by me
      </span>
    </div>
  )
}

export default Legend

export const Design = () => (
  <DesignSvg style={{transform: 'rotate(-45deg)'}} stroke="var(--orange)" width={35} height={35} />
)

export const Develop = () => <DevelopSvg fill="var(--orange)" width={35} height={35} />
