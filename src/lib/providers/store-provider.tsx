"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type BoundStore, createBoundStore } from "@/lib/stores/bound-store";

export type BoundStoreApi = ReturnType<typeof createBoundStore>;

export const BoundStoreContext = createContext<BoundStoreApi | undefined>(
  undefined
);

export interface BoundStoreProviderProps {
  children: ReactNode;
}

export const BoundStoreProvider = ({ children }: BoundStoreProviderProps) => {
  const storeRef = useRef<BoundStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createBoundStore(); // Add initial state here?
  }

  return (
    <BoundStoreContext.Provider value={storeRef.current}>
      {children}
    </BoundStoreContext.Provider>
  );
};

export const useBoundStore = <T,>(selector: (store: BoundStore) => T): T => {
  const boundStoreContext = useContext(BoundStoreContext);

  if (!boundStoreContext) {
    throw new Error(`useBoundStore must be used within BoundStoreProvider`);
  }

  return useStore(boundStoreContext, selector);
};
