import React, { useState } from 'react'
import { SectionProps } from './section.types'

import * as styles from './section.module.scss'
import sleep from '../../utilities/sleep';
import { useThemeContext } from '../../utilities/themeContext';

const Section = ({title, children, id, reversed = false, Svg, paragraph = false}: SectionProps): JSX.Element => {

    const theme = useThemeContext()

    const [isClicked, setIsClicked] = useState(false);
    const [isMouseOn, setIsMouseOn] = useState(false);

    const setClicked = async () => {
        if(!isClicked){
            setIsClicked(true);
            await sleep(2000);
            setIsClicked(false)
        }
    }
    
    const setMouseOn = async () => {
        if(!isMouseOn){
            setIsMouseOn(true);
            await sleep(2000);
            setIsMouseOn(false)
        }
    }

    return (
        <div className={`${reversed? styles.sectionReversed : styles.section} ${theme === "dark" ? "" : styles.light}`} id={id? id : title}>
            {
                paragraph?
                <>
                <h2 className={`${styles.titleParagraph} ${ theme === "dark" ? "" : styles.titleLight}`} >{title}</h2>
                <div className={styles.contentParagraph}>
                    {
                        Svg? 
                            <div 
                                className={styles.svg}
                                onClick={setClicked}
                                onMouseEnter={setMouseOn}
                                onMouseDown={setClicked}
                            >
                                <Svg.svg 
                                    width={"100px"} 
                                    height={"100px"} 
                                    className={isMouseOn? styles.trebbling : null || isClicked? styles.move : null} 
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
            <h2 className={`${reversed? styles.titleReversed : styles.title} ${theme === "dark" ? "" : styles.titleLight}`} >{title}</h2>
            <div className={reversed? styles.contentReversed : styles.content}>
                {
                    Svg? 
                        <div 
                            className={styles.svg}
                            onClick={setClicked}
                            onMouseEnter={setMouseOn}
                            onMouseDown={setClicked}
                        >
                            <Svg.svg 
                                width={"100px"} 
                                height={"100px"} 
                                className={isMouseOn? styles.trebbling : null || isClicked? styles.move : null} 
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
