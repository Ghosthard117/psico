import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="xl"
      className=""
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p
      className="font-montserratAlternates font-normal max-w-lg text-lg text-pretty text-gray-30 first-letter:text-primary-50"
    >
      {children}
    </p>
  )
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="flex flex-col md:flex-row max-w-6xl w-full justify-between gap-8"
      >
        <div
          className="flex flex-col justify-center max-w-4xl w-full gap-6"
        >
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.body}
            components={components}
          />
        </div>
        <div
          className="flex items-center justify-center max-w-4xl w-full"
        >
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-3xl md:rounded-[32px] object-cover"
          />
        </div>

      </div>
    </Bounded>
  );
};

export default Hero;
