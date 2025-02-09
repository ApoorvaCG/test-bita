import {HomePage, SignInPage, SignUpPage, Dashboard } from "../pages";
import { AppRoute } from "../types";


/**
 * Routes accessible without authentication
 */
export const publicRoutes: AppRoute[] = [
  { path: "/", element: <HomePage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
];

/**
 * Routes that require authentication
 */
export const privateRoutes: AppRoute[] = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile", element: <>This is Profile page</> },
];