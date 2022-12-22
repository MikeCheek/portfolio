import {Chart, LinearScale, PointElement} from "chart.js"
import React, {useEffect, useState} from "react"
import {Bubble} from "react-chartjs-2"
import styles from "./index.module.scss"

interface DataChart {
  x: number
  y: number
  r: number
}
Chart.register(LinearScale, PointElement)

const Index = () => {
  const [dataChart, setDataChart] = useState<DataChart[]>()
  const [modifiedDataChart, setModifiedDataChart] = useState<DataChart[]>()
  useEffect(() => {
    fetch(window.location.origin + "/api/v1/db/views")
      .then((res) => res.json())
      .then((json: {date: number[]}) => {
        const dates = json.date.map((n) => new Date(n))
        setDataChart(
          dates.map((date) => ({
            x: parseInt(date.toLocaleString("default", {month: "numeric"}), 10),
            y: parseInt(date.toLocaleString("default", {day: "numeric"}), 10),
            r: parseInt(date.toLocaleString("default", {hour: "numeric"}), 10),
          }))
        )
      })
  }, [])

  useEffect(
    () =>
      setModifiedDataChart(
        dataChart && dataChart.length > 0
          ? [
              {x: dataChart[1].x - 1, y: Math.min(...dataChart.map((d) => d.y)) - 1, r: 0},
              ...dataChart,
              {x: dataChart[dataChart.length - 1].x + 1, y: Math.max(...dataChart.map((d) => d.y)) + 1, r: 0},
            ]
          : []
      ),
    [dataChart]
  )
  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        // borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        // pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fd76cb22",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fd76cb88",
        // pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: modifiedDataChart,
      },
    ],
  }

  return (
    <>
      <p>The following chart represents when home page was viewed</p>
      {dataChart ? (
        <div className={styles.chart}>
          <Bubble data={data} width={400} height={200} />
        </div>
      ) : (
        <p>Fetching data...</p>
      )}
    </>
  )
}

export default Index
