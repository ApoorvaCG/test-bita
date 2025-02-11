import { ReactNode } from "react";

export type AppRoute = {
  path: string;
  element: ReactNode;
};

export interface ILayoutProps {
  children: ReactNode;
}

export enum JokeType {
  Single = 'single',
  TwoPart = 'twopart',
}

export enum TaskFilterType {
  All = 'all',
  Completed = 'completed',
  Todo = 'others'
}

export interface ITaskListProps {
  tasks: Task[];
}
export interface ITaskListItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskFilterType;
  createdAt: string;
}
