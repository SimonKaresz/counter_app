import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { HandlingSurface } from "./components/HandlingSurface";
import { CounterContext } from "./context/CounterContext";

function App() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [actionType, setActionType] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (actionType === "start") {
        setSeconds((prev) => prev - 1);
        if (seconds < 1) {
          setSeconds(0);
          setActionType("");
          if (minutes > 0 && seconds < 1) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
            setActionType("start");
          }
          if (hours > 0 && minutes < 1) {
            setHours((prev) => prev - 1);
            setMinutes(59);
            setSeconds(59);
            setActionType("start");
          }
        }
      }
      if (actionType === "pause") {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, setSeconds, minutes, setMinutes, hours, setHours, actionType]);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <CounterContext.Provider
        value={{
          seconds,
          setSeconds,
          minutes,
          setMinutes,
          hours,
          setHours,
          actionType,
          setActionType,
        }}
      >
        <h1 className="text-5xl font-semibold text-neutral-200 drop-shadow-lg">
          Counter
        </h1>
        <div className="flex h-[300px] w-[500px] max-w-[90%] flex-col items-center justify-around rounded-lg border-2 bg-neutral-200/10 shadow-2xl">
          <Counter />
          <HandlingSurface />
        </div>
      </CounterContext.Provider>
    </main>
  );
}

export default App;
