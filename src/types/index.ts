import { ReactNode } from "react";

export type AppRoute = {
  path: string;
  element: ReactNode;
};

export interface LayoutProps {
  children: ReactNode;
}