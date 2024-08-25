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
      className="team__heading text-center"
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <h3
      className="font-semibold text-xl md:text-2xl font-lato text-transform: capitalize text-primary-50"
    >
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p
      className="text-gray-20 font-montserratAlternates"
    >
      {children}
    </p>
  ),
}

export default function TeamAnimated({
  slice
}: {
  slice: Content.TeamSlice
}) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const memoizedSlice = useMemo(() => slice, [slice])

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".team__heading, .team__member",
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
        start: "top bottom-=50%",
        toggleActions: "play pause resume reverse"
      }
    })

    timeLine.fromTo(
      ".team__heading",
      { x: 150 },
      {
        x: 0,
        duration: 1.5,
        opacity: 1
      }
    )

    timeLine.fromTo(
      ".team__member",
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
      id="team"
    >
      <PrismicRichText
        field={memoizedSlice.primary.heading}
        components={components}
      />

      <div className="md:mt-10 mt-4 grid gap-3 md:grid-cols-4 grid-cols-1 md:gap-8 md:w-h-[535px]">
        {memoizedSlice.primary.members.map(item => (
          <div
            key={asText(item.name)}
            className="team__member bg-white-100 rounded-3xl md:rounded-[32px] flex flex-col md:mx-0 mx-4"
          >
            <div className="w-full h-[300px]">
              <PrismicNextImage
                field={item.photo}
                className="h-full object-cover rounded-[32px] p-5"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col p-5 gap-3">
              <PrismicRichText
                field={item.name}
                components={components}
              />
              <PrismicRichText
                field={item.speciality}
                components={components}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}