import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { asText, Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

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

/**
 * Props for `Statistics`.
 */
export type StatisticsProps = SliceComponentProps<Content.StatisticsSlice>;

const Statistics = ({ slice }: StatisticsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}

    >
      <div className="flex md:flex-row flex-col justify-between md:justify-around items-center bg-gray-10 md:py-14 md:px-12 rounded-3xl md:rounded-[32px] gap-5 py-8 max-w-2xl md:max-w-full">
        {slice.primary.statistics.map((item) => (
          <div key={asText(item.heading)} className="flex items-center justify-center gap-1 flex-col max-w-sm">
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
    </Bounded>
  );
};

export default Statistics;
