import React from "react"
import {Canvas} from "@react-three/fiber"
import Grid from "./Grid"
import {OrthographicCamera} from "@react-three/drei"

const Index = () => {
  return (
    <Canvas style={{height: "90vh", width: "100vw"}}>
      {/* Configure an orthographic camera that makes the scene visible */}
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
      <Grid />
    </Canvas>
  )
}

export default Index
