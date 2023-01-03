import { HoursHand } from "./subcomponents/HoursHand";
import { MinutesHand } from "./subcomponents/MinutesHand";
import { SecondsHand } from "./subcomponents/SecondsHand";

export const Counter = () => {
  return (
    <div className="flex h-[100%] w-[300px] items-center justify-around text-6xl text-neutral-200/90">
      <HoursHand />:
      <MinutesHand />:
      <SecondsHand />
    </div>
  );
};
