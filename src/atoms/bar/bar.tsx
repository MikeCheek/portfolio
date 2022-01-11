import React from 'react'

import * as styles from './bar.module.scss'
import { BarProps } from './bar.types';

import styled, { keyframes } from 'styled-components';

const Bar = ({name, percentage}: BarProps): JSX.Element => {

    let rand =  0 + Math.random() * (5 - 0);

    const fill = keyframes`
        100%{
            width: ${percentage};
        }
    `
    const Bar = styled.div`
        animation: ${fill} ${rand}s forwards;
    `

    return (
        <div className={styles.wrap} >
            <div className={styles.details}>
                <span>{name}</span>
                <span>{percentage}</span>
            </div>
            <div className={styles.barWrap}>
                <Bar className={styles.bar} />
            </div>
        </div>
    )
}

export default Bar;