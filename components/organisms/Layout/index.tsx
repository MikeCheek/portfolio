import React, {useState, useEffect} from "react"

import styles from "./index.module.scss"
import {LayoutProps} from "./index.types"

import Footer from "@atoms/Footer"
import Separator from "@atoms/Separator"
import ArrowUp from "@molecules/ArrowUp"

import Network from "@atoms/Network"
import ProgressPage from "@atoms/ProgressPage"
import Background from "@molecules/Background"

import {Montserrat, Rubik} from "next/font/google"
import {SpeedInsights} from "@vercel/speed-insights/next"

import postRequest from "../../../utilities/postRequest"
import {motion} from "framer-motion"

const montserrat = Montserrat({
  // weight: ["700"],
  display: "swap",
  subsets: ["latin"],
})

const rubik = Rubik({
  // weight: ["300", "500", "700"],
  display: "swap",
  subsets: ["latin"],
})

const Index = ({children, noGameLink = false, noBackground = false}: LayoutProps) => {
  useEffect(() => {
    // const params = new URLSearchParams(location.search)
    // const referrer = document.referrer
    // if (referrer && referrer.length > 0) addRef(referrer)
    // updateRef(params)
    // updateView(params)
    return () => {
      document.removeEventListener("keydown", () => {})
      document.removeEventListener("keyup", () => {})
    }
  }, [])

  const addRef = (ref: string) => {
    if (typeof window === "undefined") return
    postRequest(window.location.origin + "/api/v1/db/referral", {
      source: ref,
    })
  }

  const updateView = (params: URLSearchParams) => {
    if (typeof window === "undefined") return
    postRequest(window.location.origin + "/api/v1/db/views", {
      page: "index",
      mbare: params.has("mbare"),
    })
  }

  const updateRef = (params: URLSearchParams) => {
    if (!params.has("r")) return
    const value = params.get("r")
    switch (value) {
      case "ln":
        addRef("linkedin")
        break
      case "nt":
        addRef("nt")
        break
      case "wg":
        addRef("wordgame")
        break
      case "gt":
        addRef("github")
        break
      case "ld":
        addRef("oldsite")
        break
      default:
        addRef(value ?? "null")
        break
    }
  }

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
      <div className={`${montserrat.className} ${rubik.className}`}>
        <SpeedInsights />
        {!noBackground && <Background />}
        <div id="top" className={styles.layout}>
          <ProgressPage />
          <Network />
          {children}

          <Separator />
          <Footer noGameLink={noGameLink} />
        </div>
        {!noGameLink && <ArrowUp />}
      </div>
    </motion.main>
  )
}

export default Index
