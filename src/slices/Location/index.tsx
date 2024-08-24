import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="text-transform: capitalize first-letter:text-primary-50 text-center"
    >
      {children}
    </Heading>
  ),
}

export type LocationProps = SliceComponentProps<Content.LocationSlice>;

/**
 * Component for "Location" Slices.
 */
const Location = ({ slice }: LocationProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-center items-center w-full gap-6 mb-4">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />

        <div className="md:h-[600px] h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.394133454562!2d-101.42584541163363!3d26.906664281619083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868bcde538573a75%3A0x6b9a1936f8c7136b!2sWalmart%20Monclova!5e0!3m2!1ses-419!2smx!4v1724458421628!5m2!1ses-419!2smx"
            className="border-0 rounded-[32px] w-full h-full"
            loading="lazy"></iframe>
        </div>
      </div>
    </Bounded>
  );
};

export default Location;
