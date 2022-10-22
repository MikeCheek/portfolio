import React, {useEffect, useRef} from 'react'

interface CanvasImageProps {
  width: number
  height: number
  image: HTMLImageElement
}

const CanvasImage = ({width, height, image}: CanvasImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let context
    if (canvasRef.current) context = canvasRef.current.getContext('2d')
    if (context) context.drawImage(image, 0, 0, width, height)
  }, [canvasRef.current, image])

  return <canvas width={width} height={height} />
}

export default CanvasImage
