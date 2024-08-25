"use client"

import Heading from "@/components/Heading"
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"
import { useGSAP } from "@gsap/react"
import { asText, Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMemo, useRef } from "react"

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="location__heading text-center"
    >
      {children}
    </Heading>
  ),
}

export default function LocationAnimated({
  slice
}: {
  slice: Content.LocationSlice
}) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const memoizedSlice = useMemo(() => slice, [slice])

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".location__heading, .map",
        { opacity: 1 },
      )
      return
    }

    const timeLine = gsap.timeline({
      defaults: {
        ease: "power2.inOut"
      },
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom-=40%",
        toggleActions: "play pause resume reverse"
      }
    })

    timeLine.fromTo(
      ".location__heading",
      {y: 50},
      {
        y: 0,
        duration: 1.5,
        opacity: 1
      },
    )

    timeLine.fromTo(
      ".map",
      { y: 150 },
      {
        y: 0,
        duration: 1.5,
        opacity: 1
      },
      "-=1.5"
    )
  }, { scope: container })

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center w-full gap-6 mb-4"
    >
      <PrismicRichText
        field={memoizedSlice.primary.heading}
        components={components}
      />

      <div className="map md:h-[600px] h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.7417616257408!2d-101.42216712456057!3d26.91168957664774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzQyLjEiTiAxMDHCsDI1JzEwLjUiVw!5e0!3m2!1sen!2smx!4v1724536727284!5m2!1sen!2smx"
          className="border-0 rounded-[32px] w-full h-full"
          loading="lazy"></iframe>
      </div>
    </div>
  )
}