import React from 'react'
import {Link} from 'gatsby'
import SEO from '../components/seo/seo'
import Layout from '../components/layout/layout'
import Rocket from '../components/rocket/rocket'

const NotFoundPage = (): JSX.Element => {

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
        </span>
      </Layout>
    </>
  )
}

export default NotFoundPage
