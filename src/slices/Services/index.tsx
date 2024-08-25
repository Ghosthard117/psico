import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ServicesAnimated from "./ServicesAnimated";

export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

const Services = ({ slice }: ServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServicesAnimated slice={slice} />
    </Bounded>
  );
};

export default Services;
