import React from 'react'

import * as styles from './arrowUp.module.scss'

import Arrow from '../../assets/arrow.svg'

const ArrowUp = () => {
    //the logic of animation is on navBar.tsx
    return (
        <a href={"#top"} className={styles.arrowUp} id={"arrowUp"} title={"Go to top"}>
             <Arrow width={"50px"} height={"50px"} />
        </a>
    )
}

export default ArrowUp
