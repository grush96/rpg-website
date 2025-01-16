import { StateCreator } from "zustand/vanilla";
import { BoundStore } from "./bound-store";

export type TestState = {
  count: number;
};

export type TestActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type TestSlice = TestState & TestActions;

export const defaultInitState: TestState = {
  count: 0,
};

export const createTestSlice: StateCreator<BoundStore, [], [], TestSlice> = (
  set
) => ({
  count: 0,
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
});
