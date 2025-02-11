import { Routes, BrowserRouter as Router, Route } from "react-router";
import "./App.css";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Layout from "./templates/Layout";
import { privateRoutes, publicRoutes } from "./routes";
import { HomePage } from "./pages";
import NotFound from "./components/atoms/NotFound";
import { useAuthUser } from "./hooks/useAuthUser";

function App() {
  const { isLoading } = useAuthUser();

  if (isLoading) {
    return (
      <div className="flex justify-center w-full h-screen items-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Public Routes */}
            {publicRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<SignedOut>{element}</SignedOut>}
              />
            ))}

            {/* Private Routes for signed-in users*/}
            {privateRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<SignedIn>{element}</SignedIn>}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
