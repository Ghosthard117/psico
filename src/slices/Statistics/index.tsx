import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import StatisticsAnimated from "./StatisticsAnimated";


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
      <StatisticsAnimated slice={slice} />
    </Bounded>
  );
};

export default Statistics;
