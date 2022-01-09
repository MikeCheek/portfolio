import React from 'react'
import { SectionProps } from './section.types'

import * as styles from './section.module.scss'

const Section = ({title, children, reversed = false}: SectionProps): JSX.Element => {
    return (
        <div className={reversed? styles.sectionReversed : styles.section}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Section
