import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TeamAnimated from "./TeamAnimated";


export type TeamProps = SliceComponentProps<Content.TeamSlice>;


const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TeamAnimated slice={slice} />
    </Bounded>
  );
};

export default Team;
