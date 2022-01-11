import React, { useRef } from 'react'
import { SectionProps } from './section.types'

//@ts-ignore
import isOnScreen from '../../utilities/isOnScreen'
import * as styles from './section.module.scss'

const Section = ({title, children, id, reversed = false, Svg}: SectionProps): JSX.Element => {
    const svgRef = useRef<HTMLDivElement>(null)
    const isVisible = isOnScreen(svgRef)
    return (
        <div className={reversed? styles.sectionReversed : styles.section} id={id? id : title}>
            <h2 className={reversed? styles.titleReversed : styles.title} >{title}</h2>
            <div className={reversed? styles.contentReversed : styles.content}>
                {
                    Svg? 
                        <div 
                            ref={svgRef} 
                            className={styles.svg}
                        >
                            <Svg 
                                width={"100px"} 
                                height={"100px"} 
                                className={isVisible? styles.trebbling : null} 
                            />
                        </div>
                     : null
                }
                <div className={styles.children}>
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default Section
