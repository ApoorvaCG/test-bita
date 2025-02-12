import { Link } from "react-router-dom";
import { useAuthUser } from "./useAuthUser";

const useHomePageDescription = () => {
  const { isAuthenticated } = useAuthUser();

  if (isAuthenticated) {
    return "Go to dashboard to explore!";
  }
  return (
    <>
      Explore and access more features by
      <Link to="/sign-in" className="text-link">
        signing in
      </Link>
      !
    </>
  );
};

export default useHomePageDescription;
