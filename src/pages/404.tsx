import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby'
import SEO from '../components/seo/seo'
import Layout from '../components/layout/layout'
import Rocket from '../components/rocket/rocket'

interface Bored {
  activity?: string
  link?: string
}

const NotFoundPage = (): JSX.Element => {
  const [bored, setBored] = useState<Bored>({})
  const [error, setError] = useState<boolean>(false)

  const fetchData = async () => {
    const result: Response = await fetch('http://www.boredapi.com/api/activity')

    if (result.ok) {
      const d = await result.json()
      d.activity = d.activity.[0].toLowerCase() + d.activity.substring(1)
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
          Did you lose your way while navigating?{' '}
          <Link to="/" className="link">
            GO HOME
          </Link>
          <Rocket />
          {!error && bored.activity && (
            <div style={{marginTop: '50px'}}>
              <p>
                If you are bored try to{' '}
                {bored.link == '' ? (
                  bored.activity
                ) : (
                  <a className="link" target="_blank" rel="noopener noreferrer" href={bored.link}>
                    {bored.activity}
                  </a>
                )}
              </p>
            </div>
          )}
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
        </span>
      </Layout>
    </>
  )
}

export default NotFoundPage
