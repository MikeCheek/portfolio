import React, { useState, useEffect } from "react";

const isOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting;
}

export default isOnScreen;