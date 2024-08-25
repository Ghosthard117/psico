"use client"
import { Content, isFilled } from "@prismicio/client";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="xl"
      className="hero__heading"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p
      className="hero__body font-montserratAlternates font-normal max-w-lg text-lg text-pretty text-gray-30 first-letter:text-primary-50"
    >
      {children}
    </p>
  )
};

export default function HeroAnimated({
  slice
}: {
  slice: Content.HeroSlice
}) {
  const container = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(
        ".hero__heading, .hero__body, .hero__image",
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
      ".hero__heading",
      { scale: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5
      }
    )

    timeLine.fromTo(
      ".hero__body",
      { y: 30 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5
      },
      "-=0.6"
    )

    timeLine.fromTo(
      ".hero__image",
      { x: 150 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5
      },
      "+=0.4"
    )
  }, { scope: container })

  return (
    <div
      ref={container}
      className="flex flex-col md:flex-row max-w-6xl w-full justify-between gap-8"
    >
      <div
        className="flex flex-col justify-center max-w-4xl w-full gap-6"
      >
        {isFilled.richText(slice.primary.heading) && (
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
        )}

        {isFilled.richText(slice.primary.body) && (
          <PrismicRichText
            field={slice.primary.body}
            components={components}
          />
        )}
      </div>
      <div
        className="hero__image flex items-center justify-center max-w-4xl w-full"
      >
        {isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-3xl md:rounded-[32px] object-cover"
            priority
          />
        )}
      </div>

    </div>
  )
}