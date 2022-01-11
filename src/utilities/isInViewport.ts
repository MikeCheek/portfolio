import {useEffect, useState} from "react"


const isInViewport = (fromY: number, toY: number, firstTimeOnly: boolean = false) => {
    const [isVisible, setIsVisible] = useState(false);
    const [seen, setSeen] = useState(false);

    const handler = () => {
        if (document.documentElement.scrollTop >= fromY && document.documentElement.scrollTop <= toY) {
            setIsVisible(true);
            if (!seen) setSeen(true);
        } else {
            if (!firstTimeOnly) setIsVisible(false)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('DOMContentLoaded', handler);
            window.addEventListener('load', handler);
            window.addEventListener('scroll', handler);
            window.addEventListener('resize', handler);            
        }
    })

    return isVisible;
}

export default isInViewport;