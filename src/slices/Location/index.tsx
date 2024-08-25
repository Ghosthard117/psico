import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import LocationAnimated from "./LocationAnimated";

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
      <LocationAnimated slice={slice} />
    </Bounded>
  );
};

export default Location;
