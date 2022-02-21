import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './photoProfile.module.scss'
import detectBrowser from '../../utilities/detectBrowser'

const PhotoProfile = (): JSX.Element => {

    const parallax = (event: any) => {
        document.getElementById("profile")?.childNodes.forEach((shift: any) => {
            const rect = shift.getBoundingClientRect();
            const middleY = rect.top + (rect.height / 2);
            const middleX = rect.left + (rect.width / 2);
            const x = (middleX - event.pageX) / 10;
            const y = -(middleY - event.pageY) / 10;

            shift.style.transform = ` perspective(300px) rotateX(${y}deg) rotateY(${x}deg)`;
        });
    }

    const addListener = () => detectBrowser() === "Safari" ? null : document.addEventListener("mousemove", parallax);
    const removeListener = () => {
        document.removeEventListener("mousemove", parallax);
        document.getElementById("profile")?.childNodes.forEach((shift: any) => {
            shift.style.transform = `none`;
        });
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