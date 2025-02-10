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
