import React, {useEffect, useState} from "react"
import Loading from "../atoms/loading"
import Layout from "../components/layout"
import SEO from "../components/seo"

const InfoPage = () => {
  const [data, setData] = useState<JSON>()
  const [deploys, setDeploys] = useState<JSON>()
  const [error, setError] = useState<boolean[]>([false, false])
  const [fetched, setFetched] = useState<boolean[]>([false, false])

  const fetchData = () => {
    fetch("https://api.github.com/repos/mikecheek/portfolio/languages")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((_err) => setError((err) => [true, err[1]]))
      .finally(() => setFetched((fetch) => [true, fetch[1]]))

    fetch("https://api.github.com/repos/mikecheek/portfolio/actions/workflows/20375826/runs")
      .then((response) => response.json())
      .then((data) => setDeploys(data))
      .catch((_err) => setError((err) => [err[0], true]))
      .finally(() => setFetched((fetch) => [fetch[0], true]))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <SEO title="Info" description="Just multiple test" pathname="/info/" />
      <Layout>
        <>
          {fetched[0] ? (
            !error[0] && (
              <div>
                <p>There are {Object.keys(data!).length} different languages on this repository </p>
                {Object.keys(data!).map((entry: string, key: number) => {
                  return (
                    <p key={key}>
                      {entry}: {(data as any)[entry]}
                    </p>
                  )
                })}
              </div>
            )
          ) : (
            <Loading />
          )}

          {fetched[1] ? (
            !error[1] && (
              <div>
                <p>This site was built and deployed {(deploys as any)["total_count"]} times</p>
              </div>
            )
          ) : (
            <Loading />
          )}
        </>
      </Layout>
    </>
  )
}

export default InfoPage
