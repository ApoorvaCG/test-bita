import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { CLERK_PUBLISHABLE_KEY } from "./constants/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Clerk Publishable Key is not available in the .env file");
}
const queryClient = new QueryClient();

/* Web Vital Measures */
if (process.env.NODE_ENV === "development") {
  // importing named export
  import("./reportWebVitals").then(({ reportWebVitals }) => {
    reportWebVitals((metric) => {
      if (process.env.NODE_ENV === "development") {
        console.log("Web Vitals:", metric);
      } else {
        // In production, measures can be sent to any web analytics service in production
        if (metric.name === 'LCP' && metric.value > 2500) {
          console.warn(`Slow LCP detected: ${metric.value}ms`);
        }
      }
    });
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider
        publishableKey={CLERK_PUBLISHABLE_KEY}
        signInFallbackRedirectUrl="/dashboard"
        signUpFallbackRedirectUrl="/dashboard"
        afterSignOutUrl="/"
      >
        <App />
      </ClerkProvider>
    </QueryClientProvider>
  </StrictMode>
);
