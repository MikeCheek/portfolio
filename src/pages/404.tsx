import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby'
import SEO from '../components/seo/seo'
import Layout from '../components/layout/layout'
import Rocket from '../components/rocket/rocket'

const NotFoundPage = (): JSX.Element => {
  
  const [bored, setBored] useState<JSON>(JSON.parse(`{"loading": "data"}`))
  const [error, setError] = useState<boolean>(false)
  
  const fetchData = async () => {
    const result: Response = await fetch('https://www.boredapi.com/api/activity')
    
    if (result.ok) {
      const d: JSON = await result.json()
      setBored(d)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <SEO title={'Not found'} pathname={'/404/'} />
      <Layout>
        <h1 style={{color: 'var(--pink)'}}>PAGE NOT FOUND</h1>
        <span style={{textAlign: 'center', marginBottom: '100px'}}>
          Did you lose your way while navigating?
          <Rocket />
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" className="buttonStyle">
            GO HOME
          </Link>
          {!error && (
            <div>
              <p>If you are bored try {bored.link==""? bored.activity : <a target="_blank" href={bored.link}>{bored.activity}</a>}</p>
            </div>
          )}
          
        </span>
      </Layout>
    </>
  )
}

export default NotFoundPage
