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
      className="text-transform: capitalize first-letter:text-primary-50 text-center"
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

export type TeamProps = SliceComponentProps<Content.TeamSlice>;


const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col justify-center w-full gap-8 services" id="team">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />

        <div className="md:mt-10 mt-4 grid gap-3 md:grid-cols-4 grid-cols-1 md:gap-8 md:w-h-[535px]">
          {slice.primary.members.map(item => (
            <div
              key={asText(item.name)}
              className="bg-white-100 rounded-3xl md:rounded-[32px] flex flex-col md:mx-0 mx-4"
            >
              <div className="w-full h-[300px]">
                <PrismicNextImage
                  field={item.photo}
                  className="h-full object-cover rounded-[32px] p-5"
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
    </Bounded>
  );
};

export default Team;
