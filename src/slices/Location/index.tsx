import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className="text-center"
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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.7417616257408!2d-101.42216712456057!3d26.91168957664774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzQyLjEiTiAxMDHCsDI1JzEwLjUiVw!5e0!3m2!1sen!2smx!4v1724536727284!5m2!1sen!2smx"
            className="border-0 rounded-[32px] w-full h-full"
            loading="lazy"></iframe>
        </div>
      </div>
    </Bounded>
  );
};

export default Location;
