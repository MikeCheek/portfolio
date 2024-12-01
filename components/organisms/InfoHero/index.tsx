import React, {useEffect, useState} from "react"
import styles from "./index.module.scss"
import Loading from "@atoms/Loading"
import ViewChart from "@atoms/ViewChart"
import {CustomData, GitHubData} from "./index.types"

const colors = [
  "var(--pink)",
  "var(--orange)",
  "var(--green)",
  "var(--grey)",
  "var(--strong-pink)",
  "var(--strong-orange)",
  "var(--white)",
]

const Index = () => {
  const [data, setData] = useState<CustomData[]>()
  const [max, setMax] = useState<number>(0)
  // const [deploys, setDeploys] = useState<JSON>()
  const [error, setError] = useState<boolean[]>([false, false])
  const [fetched, setFetched] = useState<boolean[]>([false, false])

  const fetchData = () => {
    fetch("https://api.github.com/repos/mikecheek/portfolio/languages")
      .then((response) => response.json())
      .then((data: GitHubData) =>
        setData(Object.keys(data).map((entry: string) => ({language: entry, value: data[entry], percentage: 0})))
      )
      .catch((_err) => setError((err) => [true, err[1]]))
      .finally(() => setFetched((fetch) => [true, fetch[1]]))

    // fetch("https://api.github.com/repos/mikecheek/portfolio/actions/workflows/20375826/runs")
    //   .then((response) => response.json())
    //   .then((data) => setDeploys(data))
    //   .catch((_err) => setError((err) => [err[0], true]))
    //   .finally(() => setFetched((fetch) => [fetch[0], true]))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      let m = 0
      data.forEach((value) => (m += value.value))
      setMax(m)
      data.map((value) => (value.percentage = (value.value / m) * 100))
    }
  }, [data])

  return (
    <div className={styles.wrap}>
      <h1 className={styles.heading}>Portfolio Info</h1>
      {fetched[0] ? (
        !error[0] && (
          <>
            <p>There are {Object.keys(data!).length} different languages on this repository </p>
            <div className={styles.progress}>
              {data!.map((entry, key) => {
                return (
                  <span key={key} style={{width: entry.percentage + "%", backgroundColor: colors[key]}}>
                    {entry.percentage > 4 ? (
                      <p style={{color: colors[key]}}>{entry.percentage.toFixed(2) + "%"}</p>
                    ) : (
                      <></>
                    )}
                  </span>
                )
              })}
            </div>
            <div className={styles.legendWrap}>
              {data!.map((entry, key) => {
                return (
                  <p className={styles.legend} key={key}>
                    {entry.language} <span style={{backgroundColor: colors[key]}}></span>
                  </p>
                )
              })}
            </div>
          </>
        )
      ) : (
        <Loading />
      )}

      {/* {fetched[1] ? (
        !error[1] && (
          <div>
            <p>This site was built and deployed {(deploys as any)["total_count"]} times</p>
          </div>
        )
      ) : (
        <Loading />
      )} */}
      {/* <h2 className={styles.heading}>Home page views</h2> */}
      {/* <ViewChart /> */}
    </div>
  )
}

export default Index
