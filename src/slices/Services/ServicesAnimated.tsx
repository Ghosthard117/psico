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
      className="service__heading text-center"
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <h3
      className="font-semibold text-xl font-montserratAlternates text-transform: capitalize text-gray-10"
    >
      {children}
    </h3>
  ),
}

export default function ServicesAnimated({
  slice
}: {
  slice: Content.ServicesSlice
}) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const memoizedSlice = useMemo(() => slice, [slice])

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".service__heading, .service__item",
        { opacity: 1 },
      )
      return
    }

    const timeLine = gsap.timeline({
      defaults: {
        ease: "power1.inOut"
      },
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom-=40%",
        toggleActions: "play pause resume reverse"
      }
    })

    timeLine.fromTo(
      ".service__heading",
      { y: 50 },
      {
        y: 0,
        duration: 1.5,
        opacity: 1
      }
    )

    timeLine.fromTo(
      ".service__item",
      { scale: 0.2 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3
      },
      "-=1"
    )
  }, { scope: container })

  return (
    <div
      ref={container}
      className="flex flex-col justify-center w-full gap-8 services"
      id="services"
    >
      <PrismicRichText
        field={memoizedSlice.primary.heading}
        components={components}
      />

      <div className="md:mt-10 mt-4 grid gap-3 md:grid-cols-3 md:gap-8">
        {memoizedSlice.primary.services.map(item => (
          <div
            className="service__item"
            key={asText(item.service)}
          >
            <div className="relative rounded-xl md:rounded-3xl overflow-hidden max-h-[240px]">
              <PrismicNextImage
                field={item.image}
                className="rounded-xl md:rounded-3xl object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 flex top-[65%] justify-center bg-white-100 h-fit rounded-full px-3 py-2 mx-4 text-xs">
                <PrismicRichText
                  field={item.service}
                  components={components}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}