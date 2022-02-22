import React, { useEffect, useState } from 'react'
import * as styles from "./bashWindow.module.scss"
import { BashWindowProps, Dim } from './bashWindow.types'

const BashWindow = ({ children }: BashWindowProps): JSX.Element => {
    const [dim, setDim] = useState<Dim>({ width: 70, height: 32 })

    const calculateDim = () => {
        const rect: DOMRect = document.getElementById("terminal")!.getBoundingClientRect();
        setDim({ width: Math.floor(rect.width), height: Math.floor(rect.height) })
    }


    useEffect(() => {
        calculateDim()
        window.addEventListener('resize', calculateDim);
    }, [])

    return (
        <div id={"terminal"} className={styles.terminal}>
            <div className={styles.top}>
                <div className={styles.buttons}>
                    <span className={styles.circleRed}></span>
                    <span className={styles.circleYellow}></span>
                    <span className={styles.circleGreen}></span>
                </div>
                <div className={styles.title}>bash: ~ {dim.height}x{dim.width}</div>
            </div>
            <pre className={styles.content}>
                {children}
            </pre>
        </div>
    )
}

export default BashWindow