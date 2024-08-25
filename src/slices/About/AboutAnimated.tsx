"use client"

import Heading from "@/components/Heading"
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion"
import { useGSAP } from "@gsap/react"
import { asText, Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react"
import clsx from "clsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMemo, useRef } from "react"

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="about__heading"
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <h3
      className="text-xl md:text-2xl font-semibold"
    >
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p
      className="about__body font-montserratAlternates font-normal max-w-md text-sm md:text-lg text-pretty text-gray-30 first-letter:text-primary-50"
    >
      {children}
    </p>
  )
}

export default function AboutAnimated({
  slice
}: {
  slice: Content.AboutSlice
}) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  const memoizedSlice = useMemo(() => slice, [slice])

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".about__heading, .about__body, .about__image",
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
        start: "top bottom-=50%",
        toggleActions: "play pause resume reverse"
      }
    })

    timeLine.fromTo(
      ".about__heading",
      { x: 50 },
      {
        x: 0,
        duration: 1,
        opacity: 1,
      },
    )

    timeLine.fromTo(
      ".about__body",
      { x: -50 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
    )

    timeLine.fromTo(
      ".info__container",
      { scale: 0.3 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
      },
    )

    timeLine.fromTo(
      ".about__image",
      { y: 40 },
      {
        y: 0,
        duration: 1.5,
        opacity: 1,
      },
    )

  }, { scope: container })

  return (
    <div
      id="about"
      ref={container}
      className="about flex flex-col md:flex-row max-w-6xl w-full justify-between gap-8"
    >
      <div className="flex flex-col justify-between max-w-4xl w-full gap-14">
        <div
          className="flex flex-col justify-center max-w-4xl w-full gap-3"
        >
          <PrismicRichText
            field={memoizedSlice.primary.heading}
            components={components}
          />
          <PrismicRichText
            field={memoizedSlice.primary.body}
            components={components}
          />
        </div>

        <div
          className="info__container mt-auto grid max-w-4xl gap-3 grid-cols-2 md:gap-5"
        >
          {memoizedSlice.primary.about_info.map(item => (
            <div
              key={asText(item.heading)}
              className={clsx(
                "md:gap-4 gap-2 py-3 px-6 rounded-xl md:rounded-[32px] text-balance",
                item.dark ? "bg-gray-10 text-white-100" : "bg-white-100 text-gray-10 border border-gray-10"
              )}
            >
              <PrismicRichText
                field={item.heading}
                components={components}
              />
              <div className="w-full text-balance md:text-sm text-xs font-montserratAlternates">
                <PrismicRichText field={item.body} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="about__image flex items-center justify-center max-w-4xl w-full"
      >
        <PrismicNextImage
          field={memoizedSlice.primary.image}
          className="rounded-3xl md:rounded-[32px] object-cover"
        />
      </div>
    </div>
  )
}