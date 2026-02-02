import {useEffect, useRef} from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
})

type Props = {
  chart: string
}

export default function Mermaid({chart}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const render = async () => {
      try {
        ref.current!.innerHTML = ""
        const {svg} = await mermaid.render("mermaid-svg" + Date.now() + "-" + Math.floor(Math.random() * 100000), chart)
        if (ref.current) {
          ref.current.innerHTML = svg
        }
      } catch (err) {
        console.error("Mermaid error:", err)
      }
    }

    render()
  }, [chart])

  return <div ref={ref} />
}
