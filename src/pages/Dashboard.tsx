import React from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { UserResource } from "@clerk/types";
import JokeWidget from "../components/molecules/JokeWidget";
import UserProfileCard from "../components/organisms/UserProfileCard";
import TaskContainer from "../components/organisms/TaskContainer";

const Dashboard: React.FC = () => {
  const { isLoading, isAuthenticated, user } = useAuthUser();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please sign in</p>;

  const { firstName, id, username } = user as UserResource;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left column with Welcome and Task cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Welcome Card */}
            <UserProfileCard user={{ id, firstName, username }} />
            {/* Task Card */}
            <div className="p-4 bg-white shadow-md rounded-xl">
              <TaskContainer />
            </div>
          </div>

          {/* Right column with Joke card */}
          <div className="lg:col-span-1">
            <div className="p-4 bg-white shadow-md rounded-xl min-h-80">
              <JokeWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
