import React from "react"

const Crosshair = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "20px",
        height: "20px",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {/* Center Dot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "4px",
          height: "4px",
          background: "white",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 4px white",
        }}
      />

      {/* Outer Ring */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
        }}
      />
    </div>
  )
}

export default Crosshair
