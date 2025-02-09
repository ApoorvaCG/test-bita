import React from "react";
import useHomePageDescription from "../hooks/useHomePage";

const HomePage: React.FC = () => {
  const welcomePageDescription = useHomePageDescription();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        Welcome to BITA!
      </h1>
      <p className="text-lg text-gray-700 mb-2">{welcomePageDescription}</p>
    </div>
  );
};

export default HomePage;
