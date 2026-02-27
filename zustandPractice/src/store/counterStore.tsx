import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void | false | true;
  decrement: () => void | true | false;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,

  // if only the count is greter then or equal to then update the 0
  increment: () =>
    set((state) => {
      if (state.count >= 0) {
        return { count: state.count + 1 };
      }
      return state;
    }),

  // if the count is smaller then 0 didn't increment
  decrement: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    }),
}));
