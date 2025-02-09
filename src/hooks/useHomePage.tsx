import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const useHomePageDescription = () => {
  const { user } = useUser();

  if (user?.id) {
    return "Go to dashboard to explore!";
  }
  return (
    <>
      Explore and access more features by&nbsp;
      <Link to="/sign-in" className="font-medium text-blue-500 underline">
        signing in
      </Link>
      !
    </>
  );
};

export default useHomePageDescription;
