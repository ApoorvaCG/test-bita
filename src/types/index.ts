import { ReactNode } from "react";

export type AppRoute = {
  path: string;
  element: ReactNode;
};

export interface ILayoutProps {
  children: ReactNode;
}

export interface ITaskListProps {
  items: { id: number; content: string }[];
}