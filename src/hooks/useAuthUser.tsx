import { useUser } from "@clerk/clerk-react";

export const useAuthUser = () => {
  const { isLoaded, isSignedIn, user,  } = useUser();

  return {
    isLoading: !isLoaded, 
    isAuthenticated: isSignedIn && !!user, 
    user: user,
  };
};
