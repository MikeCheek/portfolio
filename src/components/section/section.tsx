import React from 'react'
import { SectionProps } from './section.types'

import * as styles from './section.module.scss'

const Section = ({title, children, id, reversed = false, Svg}: SectionProps): JSX.Element => {
    return (
        <div className={reversed? styles.sectionReversed : styles.section} id={id? id : title}>
            <h2 className={reversed? styles.titleReversed : styles.title} >{title}</h2>
            <div className={reversed? styles.contentReversed : styles.content}>
                {Svg? <Svg width={"100px"} height={"100px"} /> : null}
                {children}
            </div>
            
        </div>
    )
}

export default Section
