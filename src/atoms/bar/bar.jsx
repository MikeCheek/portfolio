import React from 'react'

import * as styles from './bar.module.scss'
import { BarProps } from './bar.types';

import styled, { keyframes } from 'styled-components';

let rand =  0 + Math.random() * (5 - 0);

const fill = keyframes`100%{width: ${(props) => props.percentage || "0%"};}`

const BarDiv = styled.div`
        position: relative;
        width: 0;
        height: 9px;
        border-radius: 10px;
        background-color: var(--transparent-orange);
        width: 0%;
        width: ${(props) => props.percentage || "0%"};
        animation: ${rand}s forwards;
    `

const Bar = ({name, percentage}) => {

    return (
        <div className={styles.wrap} >
            <div className={styles.details}>
                <span>{name}</span>
                <span>{percentage}</span>
            </div>
            <div className={styles.barWrap}>
                <BarDiv percentage={percentage} />
            </div>
        </div>
    )
}

export default Bar;