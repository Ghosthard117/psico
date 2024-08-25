import Bounded from "@/components/Bounded";
// import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
// import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import HeroAnimated from "./HeroAnimated";

// const components: JSXMapSerializer = {
//   heading2: ({ children }) => (
//     <Heading
//       as="h2"
//       size="xl"
//       className=""
//     >
//       {children}
//     </Heading>
//   ),
//   paragraph: ({ children }) => (
//     <p
//       className="font-montserratAlternates font-normal max-w-lg text-lg text-pretty text-gray-30 first-letter:text-primary-50"
//     >
//       {children}
//     </p>
//   )
// };

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
      <HeroAnimated slice={slice} />
    </Bounded>
  );
};

export default Hero;
