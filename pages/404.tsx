import React, {useState, useEffect} from "react"
import Link from "next/link"
import SEO from "@atoms/Seo"
import Layout from "@organisms/Layout"
import Rocket from "@atoms/Rocket"
import styles from "../styles/404.module.scss"

interface Bored {
  activity?: string
  link?: string
  type?: string
  partecipants?: number
  price?: number
  key?: string
  accessibility?: number
}

const NotFoundPage = () => {
  const [bored, setBored] = useState<Bored>({})
  const [fetched, setFetched] = useState<boolean>(false)
  const [_error, setError] = useState<boolean>(false)

  const fixData = (data: Bored) => {
    if (data.activity) data.activity = data.activity[0].toLowerCase() + data.activity.substring(1)
    return data
  }

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setBored(fixData(data))
        setFetched(true)
      })
      .catch((_err) => setError(true))
  }, [])

  return (
    <>
      <SEO title={"Not found"} pathname={"/404/"} />
      <Layout noBackground>
        <h1 className={styles.heading}>PAGE NOT FOUND</h1>
        <span className={styles.lost}>
          Did you lose your way while navigating?{" "}
          <Link title="GO HOME" href="/" className="link">
            GO HOME
          </Link>
          <Rocket />
          {fetched && (
            <div className={styles.boredWrap}>
              <p>
                If you are bored try to{" "}
                {bored.link == "" ? (
                  bored.activity
                ) : (
                  <a
                    title={bored.activity}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={bored.link}
                  >
                    {bored.activity}
                  </a>
                )}
              </p>
            </div>
          )}
          {process.env.NODE_ENV === "development" ? (
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
