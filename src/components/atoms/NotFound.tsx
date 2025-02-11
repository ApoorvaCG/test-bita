import { Bird } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-lvh">
      <Bird size={68} color="#a34fe8" strokeWidth={1} />
      <h1 className="text-lg font-bold">
        <span>🙃</span>
        Page not found!
      </h1>
      <p className="font-lg">Go to<Link to="/" className="text-link"> Home page </Link>to continue!</p>
    </div>
  );
};

export default NotFound;
