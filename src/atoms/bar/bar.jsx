import React, { useState, useEffect, useRef } from 'react'

import * as styles from './bar.module.scss'

//import { BarProps } from './bar.types';

import styled, { keyframes } from 'styled-components';

import isOnScreen from '../../utilities/isOnScreen';

//const fill = keyframes`100%{width: ${(props) => props.percentage || "0%"};}`

const BarDiv = styled.div`
        position: relative;
        width: 0;
        height: 9px;
        border-radius: 10px;
        background-color: var(--transparent-orange);
        width: ${(props) => props.percentage || "0%"};
        transition: width ${(props) => props.rand || 2}s ease-in-out;
    `

const Bar = ({name, percentage}) => {
    const barRef = useRef(null)
    const isVisible = isOnScreen(barRef, false)

    const [perc, setPerc] = useState("0%");
    const [rand, setRand] = useState(2);

    const changePerc = () => {
        setPerc(percentage);
    }

    const calcRand = () => {
        setRand(1 + Math.random() * (5 - 1));
    }
    
    useEffect(() => {
        calcRand();
        changePerc();
    }, [])

    return (
        <div className={styles.wrap} >
            <div className={styles.details}>
                <span>{name}</span>
                <span>{percentage}</span>
            </div>
            <div className={styles.barWrap} ref={barRef}>
                <BarDiv percentage={isVisible? perc : "0%"} rand={rand} />
            </div>
        </div>
    )
}

export default Bar;