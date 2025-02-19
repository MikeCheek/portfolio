import React from "react"
import FilteringProps from "./index.types"
import Badge from "@atoms/Badge"
import styles from "./index.module.scss"

const Index = ({ values, onChange, active }: FilteringProps) => {
  return (
    <div className={styles.wrap}>
      <p>Filter by category: </p>
      {values.map((value, key) => (
        <Badge key={key} text={value} active={active.includes(value)} onClick={() => onChange(value)} />
      ))}
    </div>
  )
}

export default Index
