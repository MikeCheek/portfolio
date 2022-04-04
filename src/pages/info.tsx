import React, {useEffect, useState} from "react"
import Loading from "../atoms/loading/loading"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const InfoPage = () => {
  const [data, setData] = useState<JSON>(JSON.parse(`{"loading": "data"}`))
  const [error, setError] = useState<boolean>(false)

  const fetchData = async () => {
    const result: Response = await fetch("https://api.github.com/repos/mike-cheek/portfolio/languages")
    if (result.ok) {
      const d: JSON = await result.json()
      setData(d)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <SEO title="Loading" description="Just a loading animation test" />
      <Layout noMenu={true}>
        <>
          <Loading />
          {!error ? (
            <div>
              <p>There are {Object.keys(data!).length} different languages on this website </p>
              {Object.keys(data!).map((entry: string, key: number) => {
                return (
                  <p key={key}>
                    {entry}: {(data as any)[entry]}
                  </p>
                )
              })}
            </div>
          ) : null}
        </>
      </Layout>
    </>
  )
}

export default InfoPage
