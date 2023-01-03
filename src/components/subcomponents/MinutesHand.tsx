import { useCounterContext } from "../../context/CounterContext";

export const MinutesHand = () => {
  const { minutes, setMinutes, actionType } = useCounterContext();

  const increasedMinutes = () => {
    if (minutes < 59 && minutes >= 0) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
    }
  };

  const decreasedMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else {
      setMinutes(59);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {actionType !== "start" ? (
        <button
          onClick={() => {
            increasedMinutes();
          }}
        >
          +
        </button>
      ) : (
        ""
      )}
      <p>{minutes < 10 ? "0" + minutes.toString() : minutes}</p>
      {actionType !== "start" ? (
        <button
          onClick={() => {
            decreasedMinutes();
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
