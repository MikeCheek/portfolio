import React from 'react'

import * as styles from './arrowUp.module.scss'

import Arrow from '../../assets/arrow.svg'
import { useThemeContext } from '../../utilities/themeContext'

const ArrowUp = (): JSX.Element => {
    //the logic of animation is on navBar.tsx

    const theme: string = useThemeContext();

    return (
        <a href={"#top"} className={theme === "dark" ? styles.arrowUp : styles.arrowUpLight} id={"arrowUp"} title={"Go to top"}>
            <Arrow width={"50px"} height={"50px"} />
        </a>
    )
}

export default ArrowUp
