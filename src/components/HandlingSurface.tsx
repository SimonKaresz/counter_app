import { useCounterContext } from "../context/CounterContext";

export const HandlingSurface = () => {
  const { setSeconds, setMinutes, setHours, actionType, setActionType } =
    useCounterContext();

  return (
    <div className="mt-16 flex w-[300px] items-center justify-around">
      {actionType !== "start" ? (
        <button
          className="start_btn"
          onClick={() => {
            setActionType("start");
          }}
        >
          Start
        </button>
      ) : (
        <button
          className="pause_btn"
          onClick={() => {
            setActionType("pause");
          }}
        >
          Pause
        </button>
      )}
      <button
        className="reset_btn"
        onClick={() => {
          setSeconds(0);
          setMinutes(0);
          setHours(0);
          setActionType("");
        }}
      >
        Reset
      </button>
    </div>
  );
};
