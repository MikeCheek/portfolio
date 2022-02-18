import React from 'react'
import Loading from '../atoms/loading/loading'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const LoadingPage = () => {
  return (
    <>
        <SEO title='Loading' description='Just a loading animation test' />
        <Layout>
            <Loading/>
        </Layout>
    </>
  )
}

export default LoadingPage