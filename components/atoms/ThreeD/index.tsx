import React, {useContext} from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Box from "./box"
import {TOUCH} from "three"
import CursorContext from "@utilities/useCursorContext"
import styles from "./index.module.scss"

const Index = () => {
  // const {fitElement, unFit} = useContext(CursorContext)

  return (
    <>
      <Canvas
        // onMouseOver={(e) => fitElement(e.currentTarget)}
        // onMouseEnter={(e) => fitElement(e.currentTarget)}
        // onMouseOut={unFit}
        // onMouseLeave={unFit}
        className={styles.wrapMobile}
      >
        <Box />
        <ambientLight intensity={0.2} />
        <directionalLight position={[-2, 5, 2]} intensity={0.2} />
      </Canvas>
      <Canvas
        // onMouseOver={(e) => fitElement(e.currentTarget)}
        // onMouseEnter={(e) => fitElement(e.currentTarget)}
        // onMouseOut={unFit}
        // onMouseLeave={unFit}
        className={styles.wrapDesktop}
      >
        <Box />
        <ambientLight intensity={0.2} />
        <directionalLight position={[-2, 5, 2]} intensity={0.2} />
        <OrbitControls enableZoom={false} autoRotate touches={{ONE: TOUCH.ROTATE, TWO: TOUCH.ROTATE}} />
      </Canvas>
    </>
  )
}

export default Index
