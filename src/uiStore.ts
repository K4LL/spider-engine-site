import { create } from 'zustand'

interface PageState {
  inDevlogPage: boolean;
  setDevlogPage: (v: boolean) => void;
}

export const usePageStateStore = create<PageState>((set) => ({
  inDevlogPage: false,
  setDevlogPage: (v: boolean) => set({ inDevlogPage: v })
})); 