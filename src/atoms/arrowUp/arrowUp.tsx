import React from 'react'
import { Link } from 'gatsby'

import * as styles from './arrowUp.module.scss'

import Arrow from '../../assets/arrow.svg'

const ArrowUp = () => {
    //the logic of animation is on navBar.tsx
    return (
        <Link to={"#top"} className={styles.arrowUp} id={"arrowUp"} >
             <Arrow width={"50px"} height={"50px"} />
        </Link>
    )
}

export default ArrowUp
