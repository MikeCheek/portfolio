import React from 'react'
// import {collection, doc, updateDoc, increment} from 'firebase/firestore'
// import {database} from '../../firebaseConfig'
import cv from '../assets/cv.pdf'
// import ReactGA from 'react-ga4'

const CV = () => {
  // const dbInstance = collection(database, 'pages')
  // const fs = doc(dbInstance, 'cv')
  // const update = async () => {
  //   await updateDoc(fs, {
  //     times: increment(1),
  //   })
  // }

  // useEffect(() => {
  //   update()
  // }, [])
  return (
    <iframe
      style={{position: 'absolute', top: 0, left: 0, right: 0}}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Michele pulvirenti Curriculum Vitae"
      name="Michele pulvirenti Curriculum Vitae"
      src={cv}
    ></iframe>
  )
}

export default CV
