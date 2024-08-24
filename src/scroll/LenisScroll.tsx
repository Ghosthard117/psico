"use client"

import Lenis from "lenis"
import { useEffect } from "react"

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on("scroll", (e: any) => {
      console.log(e)
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return null
}