import React, { useState, useEffect, useRef } from 'react'

import * as styles from './bar.module.scss'

import { BarProps } from './bar.types';

//@ts-ignore
import isOnScreen from '../../utilities/isOnScreen';
import { useThemeContext } from '../../utilities/themeContext'

//const fill = keyframes`100%{width: ${(props) => props.percentage || "0%"};}`

const Bar = ({ name, percentage }: BarProps) => {
    const barRef = useRef<null>(null)
    const check: boolean = isOnScreen(barRef, false)

    const theme: string = useThemeContext()

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [perc, setPerc] = useState<string>("0%");
    const [rand, setRand] = useState<number>(2);

    const BarStyle: React.CSSProperties = {
        width: isVisible ? perc : "0%",
        transition: `${rand}s ease-in-out`
    }

    const changePerc = () => setPerc(percentage);

    const calcRand = () => setRand(1 + Math.random() * (5 - 1));

    useEffect(() => {
        calcRand();
        changePerc();
    }, [])

    useEffect(() => {
        if (check)
            setIsVisible(true)
    }, [check])

    return (
        <div className={styles.wrap} >
            <div className={styles.details}>
                <span>{name}</span>
                <span>{percentage}</span>
            </div>
            <div className={`${styles.barWrap} ${theme === "dark" ? null : styles.light}`} ref={barRef}>
                <div className={theme === "dark" ? styles.bar : styles.barLight} style={BarStyle} />
            </div>
        </div>
    )
}

export default Bar;