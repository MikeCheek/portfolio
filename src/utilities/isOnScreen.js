import {useState, useEffect} from 'react'
import sleep from './sleep'

const isOnScreen = (ref, retarded = false) => {
  const [isIntersecting, setIntersecting] = useState(false)

  const setVisible = (entry) => {
    if (entry.isIntersecting)
      sleep(500).then(() => {
        if (entry.isIntersecting) setIntersecting(true)
        else setIntersecting(false)
      })
    else
      sleep(500).then(() => setIntersecting(false)) 
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => retarded? setVisible(entry) : setIntersecting(entry.isIntersecting))
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

export default isOnScreen
