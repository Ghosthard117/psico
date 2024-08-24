import Bounded from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="font-bold text-2xl md:text-4xl text-primary-50 transform: capitalize text-center">
      {children}
    </h2>
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
      <div className="flex md:flex-row flex-col justify-between md:justify-around items-center bg-gray-10 md:py-14 md:px-12 rounded-2xl md:rounded-[32px] gap-5 py-8 mx-16 md:mx-0">
        {slice.primary.statistics.map((item) => (
          <div key={asText(item.heading)} className="flex items-center justify-center gap-1 flex-col max-w-min">
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
