import React from "react"
import FilteringProps from "./index.types"
import Badge from "@atoms/Badge"
import styles from "./index.module.scss"

const Index = ({values, onChange, active, clearAll}: FilteringProps) => {
  return (
    <div className={styles.wrap}>
      <p>Categories: </p>
      {Object.entries(values).map(([key, number]) => (
        <Badge key={key} text={`${key} (${number})`} active={active.includes(key)} onClick={() => onChange(key)} />
      ))}
      <Badge text="X" active={false} onClick={clearAll} aria-label="Clear all filters" />
    </div>
  )
}

export default Index
