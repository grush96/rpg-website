import { createStore } from "zustand/vanilla";
import { createSheetSlice, SheetSlice } from "./sheet-slice";
import { createTestSlice, TestSlice } from "./test-slice";

export type BoundStore = SheetSlice & TestSlice; // & other stores

export const createBoundStore = () => {
  return createStore<BoundStore>()((...a) => ({
    ...createSheetSlice(...a),
    ...createTestSlice(...a),
  }));
};
