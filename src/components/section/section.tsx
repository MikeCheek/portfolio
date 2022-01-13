import React, { useState } from 'react'
import { SectionProps } from './section.types'

import * as styles from './section.module.scss'
import sleep from '../../utilities/sleep';

const Section = ({title, children, id, reversed = false, Svg, paragraph = false}: SectionProps): JSX.Element => {

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
            {
                paragraph?
                <>
                <h2 className={styles.titleParagraph} >{title}</h2>
                <div className={styles.contentParagraph}>
                    {
                        Svg? 
                            <div 
                                className={styles.svg}
                                onClick={setClicked}
                            >
                                <Svg.svg 
                                    width={"100px"} 
                                    height={"100px"} 
                                    className={isClicked? styles.trebbling : null} 
                                    fill={Svg.fill? Svg.fill : "none"}
                                    stroke={Svg.stroke? Svg.stroke : "none"}
                                />
                            </div>
                         : null
                    }
                    <div className={styles.childrenParagraph}>
                        {children}
                    </div>
                </div>
                </>
                :
                <>
            <h2 className={reversed? styles.titleReversed : styles.title} >{title}</h2>
            <div className={reversed? styles.contentReversed : styles.content}>
                {
                    Svg? 
                        <div 
                            className={styles.svg}
                            onClick={setClicked}
                        >
                            <Svg.svg 
                                width={"100px"} 
                                height={"100px"} 
                                className={isClicked? styles.trebbling : null} 
                                fill={Svg.fill? Svg.fill : "none"}
                                stroke={Svg.stroke? Svg.stroke : "none"}
                            />
                        </div>
                     : null
                }
                <div className={styles.children}>
                    {children}
                </div>
            </div>
            </>
            }
            
        </div>
    )
}

export default Section
