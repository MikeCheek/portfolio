import {useState, useEffect, RefObject} from 'react'
import sleep from './sleep'

const isOnScreen = (ref: RefObject<HTMLElement>, retarded = false) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const setVisible = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting)
      sleep(500).then(() => {
        if (entry.isIntersecting) setIntersecting(true)
        else setIntersecting(false)
      })
    else sleep(500).then(() => setIntersecting(false))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      retarded ? setVisible(entry) : setIntersecting(entry.isIntersecting)
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

export default isOnScreen
