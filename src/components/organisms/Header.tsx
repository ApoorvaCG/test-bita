import React from "react";
import { Link } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { useAuthUser } from "../../hooks/useAuthUser";

const Header:React.FC = () => {
  const { user } = useAuthUser();
  const { signOut } = useClerk();

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 shadow-md shadow-violet-200/50 bg-violet-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              BITA
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {!user && (
              <div className="flex items-center gap-6">
                <Link
                  to="/sign-in"
                  className="text-violet-800 hover:text-slate-900 transition-colors text-lg font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="text-violet-800 hover:text-slate-900 transition-colors text-lg font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {user && (
              <div className="flex items-center gap-6">
                <Link
                  to="/dashboard"
                  className="text-violet-800 hover:text-slate-900 transition-colors text-lg font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="text-violet-800 hover:text-slate-900 transition-colors text-lg font-medium"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-violet-800 hover:text-slate-900 transition-colors text-lg font-medium"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
