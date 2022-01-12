import React, { useState } from 'react'
import { SectionProps } from './section.types'

import * as styles from './section.module.scss'
import sleep from '../../utilities/sleep';

const Section = ({title, children, id, reversed = false, Svg}: SectionProps): JSX.Element => {

    const [isClicked, setIsClicked] = useState(false);

    const setClicked = async () => {
        if(!isClicked){
            setIsClicked(true);
            await sleep(2000);
            setIsClicked(false)
        }
    }
    
    return (
        <div className={reversed? styles.sectionReversed : styles.section} id={id? id : title}>
            <h2 className={reversed? styles.titleReversed : styles.title} >{title}</h2>
            <div className={reversed? styles.contentReversed : styles.content}>
                {
                    Svg? 
                        <div 
                            className={styles.svg}
                            onClick={setClicked}
                        >
                            <Svg 
                                width={"100px"} 
                                height={"100px"} 
                                className={isClicked? styles.trebbling : null} 
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
