import { createContext, useContext } from "react";

export type CounterContent = {
  seconds: number;
  setSeconds: (s: number) => void;
  minutes: number;
  setMinutes: (s: number) => void;
  hours: number;
  setHours: (s: number) => void;
  actionType: string;
  setActionType: (a: string) => void;
};

export const CounterContext = createContext<CounterContent>({
  seconds: 0,
  setSeconds: () => {},
  minutes: 0,
  setMinutes: () => {},
  hours: 0,
  setHours: () => {},
  actionType: "",
  setActionType: () => {},
});

export const useCounterContext = () => useContext(CounterContext);
