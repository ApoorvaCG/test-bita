import { lazy, Suspense } from 'react';
import { AppRoute } from "../types";

// Lazy loading pages
const HomePage = lazy(() => import("../pages/HomePage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserProfilePage = lazy(() => import("../pages/UserProfilePage"));

// Fallback Loading wrapper component for Suspense
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<p>Loading...</p>}>
    <Component />
  </Suspense>
);

/**
 * Routes accessible without authentication
 */
export const publicRoutes: AppRoute[] = [
  { path: "/", element: withSuspense(HomePage) },
  { path: "/sign-in", element: withSuspense(SignInPage) },
  { path: "/sign-up", element: withSuspense(SignUpPage) },
];

/**
 * Routes that require authentication
 */
export const privateRoutes: AppRoute[] = [
  { path: "/dashboard", element: <Dashboard/> },
  { path: "/profile", element: withSuspense(UserProfilePage) },
];
