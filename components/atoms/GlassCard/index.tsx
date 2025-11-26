import React from "react"
import styles from "./index.module.scss"

const Index = ({children, className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${styles.glass} ${className ?? ""}`} {...props}>
      {children}
    </div>
  )
}

export default Index
