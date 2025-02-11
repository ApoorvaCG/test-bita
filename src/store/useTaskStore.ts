import { create } from "zustand";
import { TaskFilterType } from "../types";

interface TaskStore {
    filter: TaskFilterType;
    setFilter: (filter: TaskStore['filter']) => void;
  }
  
  export const useTaskStore = create<TaskStore>((set) => ({
    filter: TaskFilterType.All,
    setFilter: (filter) => set({ filter })
  }));