import React, {useEffect, useState} from 'react'
import * as styles from './network.module.scss'

const Network = () => {
  const [network, setNetwork] = useState<boolean>(true)

  useEffect(() => {
    setNetwork(window.navigator.onLine)
    window.addEventListener('online', () => setNetwork(true))
    window.addEventListener('offline', () => setNetwork(false))
  }, [])

  return (
    <div className={styles.network}>
      <svg width={10} height={10} fill={network ? 'green' : 'red'}>
        <circle cx="50%" cy="50%" r="5" fill="current" />
      </svg>
    </div>
  )
}

export default Network
