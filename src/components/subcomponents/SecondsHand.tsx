import { useCounterContext } from "../../context/CounterContext";

export const SecondsHand = () => {
  const { seconds, setSeconds, actionType } = useCounterContext();

  const increasedSeconds = () => {
    if (seconds < 59 && seconds >= 0) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
    }
  };

  const decreasedSeconds = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      setSeconds(59);
    }
  };

  return (
    <div className="flex h-[100px] flex-col items-center justify-center">
      {actionType !== "start" ? (
        <button
          onClick={() => {
            increasedSeconds();
          }}
        >
          +
        </button>
      ) : (
        ""
      )}
      <p>{seconds < 10 ? "0" + seconds.toString() : seconds}</p>
      {actionType !== "start" ? (
        <button
          onClick={() => {
            decreasedSeconds();
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
