import {motion} from "framer-motion"
// import styles from "./index.module.scss"
import {PageTransitionProps} from "./index.types"
import {forwardRef} from "react"

// const pageVariants = {
//   initial: {
//     rotateY: 100,
//     skewY: 4,
//     scale: 0.98,
//     opacity: 0,
//     transformOrigin: "center left",
//     boxShadow: "0 0 0 rgba(0,0,0,0)",
//   },
//   animate: {
//     rotateY: 0,
//     skewY: 0,
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       ease: "easeIn",
//     },
//   },
//   exit: {
//     rotateY: -100,
//     skewY: 4,
//     scale: 0.98,
//     opacity: 0,
//     transformOrigin: "center right",
//     boxShadow: "-50px 0 80px rgba(0,0,0,0.2)",
//     transition: {
//       duration: 0.4,
//       ease: "easeIn",
//     },
//   },
// }

const Index = forwardRef(({children}: PageTransitionProps) => {
  return (
    <motion.main
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.main>
  )
})

Index.displayName = "PageTransition"

export default Index
