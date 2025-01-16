import { createStore, StateCreator } from "zustand/vanilla";
import { BoundStore } from "./bound-store";

export type SheetState = {
  level: number;
  points: number;
  bodyEnergy: number;
  enduranceEnergy: number;
  mindEnergy: number;
  sensesEnergy: number;
  willEnergy: number;
};

export type SheetActions = {
  setLevel: (value: number) => void;
  decrementBody: () => void;
  incrementBody: () => void;
  decrementEndurance: () => void;
  incrementEndurance: () => void;
  decrementMind: () => void;
  incrementMind: () => void;
  decrementSenses: () => void;
  incrementSenses: () => void;
  decrementWill: () => void;
  incrementWill: () => void;
  setPoints: () => void;
};

export type SheetSlice = SheetState & SheetActions;

// export const defaultInitState: SheetState = {
//   count: 0,
// };

export const createSheetSlice: StateCreator<BoundStore, [], [], SheetSlice> = (
  set
) => ({
  level: 1,
  points: 10,
  bodyEnergy: 10,
  enduranceEnergy: 10,
  mindEnergy: 10,
  sensesEnergy: 10,
  willEnergy: 10,
  setLevel: (value: number) => set((state) => ({ level: value })),
  decrementBody: () => set((state) => ({ bodyEnergy: state.bodyEnergy - 1 })),
  incrementBody: () => set((state) => ({ bodyEnergy: state.bodyEnergy + 1 })),
  decrementEndurance: () =>
    set((state) => ({ enduranceEnergy: state.enduranceEnergy - 1 })),
  incrementEndurance: () =>
    set((state) => ({ enduranceEnergy: state.enduranceEnergy + 1 })),
  decrementMind: () => set((state) => ({ mindEnergy: state.mindEnergy - 1 })),
  incrementMind: () => set((state) => ({ mindEnergy: state.mindEnergy + 1 })),
  decrementSenses: () =>
    set((state) => ({ sensesEnergy: state.sensesEnergy - 1 })),
  incrementSenses: () =>
    set((state) => ({ sensesEnergy: state.sensesEnergy + 1 })),
  decrementWill: () => set((state) => ({ willEnergy: state.willEnergy - 1 })),
  incrementWill: () => set((state) => ({ willEnergy: state.willEnergy + 1 })),
  setPoints: () =>
    set((state) => ({
      points:
        55 +
        5 * state.level -
        state.bodyEnergy -
        state.enduranceEnergy -
        state.mindEnergy -
        state.sensesEnergy -
        state.willEnergy,
    })),
});

// export const createSheetSlice: <BoundStore, [], [], SheetSlice> = (
//   initState: SheetState = defaultInitState,
// ) => {
//   return createStore<SheetSlice>()((set) => ({
//     ...initState,
//     decrementCount: () => set((state) => ({ count: state.count - 1 })),
//     incrementCount: () => set((state) => ({ count: state.count + 1 })),
//   }))
// }

// May need to import other slices for line 35/MyState
