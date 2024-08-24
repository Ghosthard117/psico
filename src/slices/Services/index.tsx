import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
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
  heading3: ({ children }) => (
    <h3
      className="font-semibold text-xl font-montserratAlternates text-transform: capitalize text-gray-10"
    >
      {children}
    </h3>
  ),
}

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-center w-full gap-8 services" id="services">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />

        <div className="md:mt-10 mt-4 grid gap-3 md:grid-cols-3 md:gap-8">
          {slice.primary.services.map(item => (
            <div
              key={asText(item.service)}
            >
              <div className="relative rounded-xl md:rounded-3xl overflow-hidden max-h-[240px]">
                <PrismicNextImage
                  field={item.image}
                  className="rounded-xl md:rounded-3xl object-cover w-full h-full"
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
    </Bounded>
  );
};

export default Services;
