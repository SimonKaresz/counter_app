import { useCounterContext } from "../../context/CounterContext";

export const HoursHand = () => {
  const { hours, setHours, actionType } = useCounterContext();

  const increasedHours = () => {
    if (hours < 99 && hours >= 0) {
      setHours(hours + 1);
    } else {
      setHours(0);
    }
  };

  const decreasedHours = () => {
    if (hours > 0) {
      setHours(hours - 1);
    } else {
      setHours(99);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {actionType !== "start" ? (
        <button
          onClick={() => {
            increasedHours();
          }}
        >
          +
        </button>
      ) : (
        ""
      )}
      <p>{hours < 10 ? "0" + hours.toString() : hours}</p>
      {actionType !== "start" ? (
        <button
          onClick={() => {
            decreasedHours();
          }}
        >
          -
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
