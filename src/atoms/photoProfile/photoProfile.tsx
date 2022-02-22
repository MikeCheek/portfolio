import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './photoProfile.module.scss'

const PhotoProfile = (): JSX.Element => {

    const parallax = (event: MouseEvent): void => {
        const shift: HTMLElement = document.getElementById("profile")!
        const rect: DOMRect = shift.getBoundingClientRect();
        const middleY: number = rect.top + (rect.height / 2);
        const middleX: number = rect.left + (rect.width / 2);
        const x: number = (middleX - event.pageX) / 10;
        const y: number = -(middleY - event.pageY) / 10;

        shift.style.transform = ` perspective(300px) rotateX(${y}deg) rotateY(${x}deg)`;

    }

    const addListener = (): void => document.addEventListener("mousemove", parallax);
    const removeListener = (): void => {
        document.removeEventListener("mousemove", parallax);
        const shift: HTMLElement = document.getElementById("profile")!
        shift.style.transform = `none`;
    }

    return (
        <div
            id="profile"
            onMouseEnter={addListener}
            onMouseLeave={removeListener}
            onMouseOver={addListener}
            onMouseOut={removeListener}
        >
            <StaticImage
                src="../../images/profescional.png"
                alt="Michele Pulvirenti"
                placeholder="tracedSVG"
                layout="constrained"
                style={{ zIndex: 1 }} //for safari
                tracedSVGOptions={{ color: "dimGrey" }}
                quality={100}
                width={200}
                height={200}
                className={styles.profescional}
            />
        </div>
    )
}

export default PhotoProfile