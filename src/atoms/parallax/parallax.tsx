import React, { useEffect } from 'react'
import * as styles from './parallax.module.scss'

const Parallax = (): JSX.Element => {

    const parallax = (event: MouseEvent) => {
        document.getElementById("wrap")?.childNodes.forEach((shift: any) => {
            const position = shift.getAttribute("id");
            const x = (window.innerWidth - event.pageX * parseInt(position || "1")) / 90;
            const y = (window.innerHeight - event.pageY * parseInt(position || "1")) / 90;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    const parallaxTouch = (event: TouchEvent) => {
        document.getElementById("wrap")?.childNodes.forEach((shift: any) => {
            const position = shift.getAttribute("id");
            const x = (window.innerWidth - event.touches[0].pageX * parseInt(position || "1")) / 90;

            shift.style.transform = `translateX(${x}px)`;
        });
    }

    useEffect(() => {
        document.addEventListener("mousemove", parallax);
        document.addEventListener("touchmove", parallaxTouch, { passive: true })
        return () => {
            document.removeEventListener("mousemove", parallax);
        }
    }, [])

    return (
        <div id="wrap" className={styles.parallaxWrap}>
            <span id="5"></span>
            <span id="-5"></span>
            <span id="15"></span>
        </div>
    )
}

export default Parallax