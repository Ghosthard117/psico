"use client"

import Heading from "@/components/Heading"
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"
import { useGSAP } from "@gsap/react"
import { asText, Content } from "@prismicio/client"
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react"
import gsap from "gsap"
import { useMemo, useRef } from "react"

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="md"
      className="text-primary-50 text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-md font-montserratAlternates text-gray-50 transform: capitalize text-center">
      {children}
    </p>
  )
}

export default function StatisticsAnimated({
  slice
}: {
  slice: Content.StatisticsSlice
}) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP)

  const memoizedSlice = useMemo(() => slice, [slice])

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".statistic__item",
        { opacity: 1 }
      );
      return
    }

    const timeLine = gsap.timeline({
      defaults: {
        ease: "power2.inOut"
      }
    })

    timeLine.fromTo(
      ".statistic__item",
      { scale: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay: 2
      },
      "+=0.5"
    )
  }, { scope: container })

  return (
    <div
      ref={container}
      className="flex md:flex-row flex-col justify-between md:justify-around items-center bg-gray-10 md:py-14 md:px-12 rounded-3xl md:rounded-[32px] gap-5 py-8 max-w-2xl md:max-w-full"
    >
      {memoizedSlice.primary.statistics.map((item) => (
        <div
          key={asText(item.heading)}
          className="statistic__item flex items-center justify-center gap-1 flex-col max-w-sm"
        >
          <PrismicRichText
            field={item.heading}
            components={components}
          />
          <PrismicRichText
            field={item.body}
            components={components}
          />
        </div>
      ))}
    </div>
  )
}