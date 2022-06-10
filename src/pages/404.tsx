import React, {useEffect} from 'react'
import {Link} from 'gatsby'
import SEO from '../components/seo/seo'
import Layout from '../components/layout/layout'
// import ReactGA from 'react-ga4'

//import { useThemeContext } from "../utilities/themeContext"
import Rocket from '../components/rocket/rocket'
import {collection, doc, updateDoc, increment} from 'firebase/firestore'
import {database} from '../../firebaseConfig'

const NotFoundPage = (): JSX.Element => {
  const dbInstance = collection(database, 'pages')
  const fs = doc(dbInstance, '404')
  const update = async () => {
    await updateDoc(fs, {
      times: increment(1),
    })
  }

  useEffect(() => {
    update()
  }, [])

  return (
    <>
      <SEO title={'Not found'} />
      <Layout noMenu={true}>
        <>
          <h1>Page not found</h1>
          <p>
            Sorry{' '}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{' '}
            we couldn't find what you were looking for.
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
            <Link to="/" className="link">
              Go home
            </Link>
            .
          </p>
        </>
      </Layout>
    </>
  )
}

export default NotFoundPage
