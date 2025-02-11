import { create } from "zustand";

interface JokeState {
  joke: string;
  setJoke: (joke: string) => void;
}

const useJokeStore = create<JokeState>((set) => ({
  joke: "",
  setJoke: (joke) => set({ joke }),
}));

export default useJokeStore;
