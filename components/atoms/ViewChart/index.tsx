import React, {useEffect, useState} from "react"
import styles from "./index.module.scss"
import {Line, LineChart, XAxis, YAxis, Tooltip} from "recharts"

interface DataChart {
  name: string
  Views: number
  hour: number
}

const Index = () => {
  const [dataChart, setDataChart] = useState<DataChart[]>()
  const [modifiedDataChart, _setModifiedDataChart] = useState<DataChart[]>([])

  const fetchData = () =>
    fetch(window.location.origin + "/api/v1/db/views")
      .then((res) => res.json())
      .then((json: {date: number[]}) => {
        const dates = json.date.map((n) => new Date(n))
        setDataChart(
          dates.map((date) => ({
            name: date.toLocaleDateString(),
            Views: 1,
            hour: parseInt(date.toLocaleString("default", {hour: "numeric"}), 10),
          }))
        )
      })

  const calculateData = () => {
    if (dataChart)
      dataChart.forEach((date) => {
        const found = modifiedDataChart.find((v) => v.name === date.name)
        if (found) found.Views += 1
        else modifiedDataChart.push(date)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    calculateData()
  }, [dataChart])

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <>
      {modifiedDataChart.length > 0 ? (
        <>
          <LineChart
            width={700}
            height={400}
            data={modifiedDataChart}
            // margin={{top: 5, right: 20, bottom: 5, left: 0}}
            className={styles.chart}
          >
            <Line type="monotone" dataKey="Views" stroke="var(--orange)" />
            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip wrapperClassName={styles.tooltip} />
          </LineChart>
        </>
      ) : (
        <p>Fetching data...</p>
      )}
    </>
  )
}

export default Index
