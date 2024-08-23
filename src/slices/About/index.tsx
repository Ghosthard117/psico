import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="text-transform: capitalize first-letter:text-primary-50 text-balance"
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-transform: capitalize">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p
      className="font-montserratAlternates font-normal max-w-md text-sm md:text-lg text-pretty text-gray-30 first-letter:text-primary-50"
    >
      {children}
    </p>
  )
}

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="flex flex-col md:flex-row max-w-6xl w-full justify-between gap-8"
      >
        <div className="flex flex-col justify-between max-w-4xl w-full gap-14">
          <div
            className="flex flex-col justify-center max-w-4xl w-full gap-3"
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
            className="mt-auto grid max-w-4xl gap-3 grid-cols-2 md:gap-5"
          >
            {slice.primary.about_info.map(item => (
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
          className="flex items-center justify-center max-w-4xl w-full"
        >
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-xl"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
