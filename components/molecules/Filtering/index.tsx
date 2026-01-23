import React from "react"
import FilteringProps from "./index.types"
import Badge from "@atoms/Badge"
import styles from "./index.module.scss"
import {P_FULLCATEGORY} from "@utilities/info"

const Index = ({values, onChange, active, buttonText, buttonAction}: FilteringProps) => {
  return (
    <div className={styles.wrap}>
      <p>Categories: </p>
      {Object.entries(values).map(([key, number]) => (
        <Badge
          key={key}
          text={`${key} (${number})`}
          active={active.includes(key)}
          onClick={() => onChange(key)}
          fulltext={P_FULLCATEGORY[key]}
        />
      ))}
      <Badge text={buttonText} onClick={buttonAction} fulltext="Toggle All Categories" />
    </div>
  )
}

export default Index
