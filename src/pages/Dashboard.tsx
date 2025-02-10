import React from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { UserResource } from "@clerk/types";
import JokeWidget from "../components/molecules/JokeWidget";
import TaskList from "../components/molecules/TaskList";
import UserProfileCard from "../components/organisms/UserProfileCard";

const Dashboard: React.FC = () => {
  const { isLoading, isAuthenticated, user } = useAuthUser();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please sign in</p>;

  const { firstName, id, username } = user as UserResource;

  return (
    <div className="max-w-7xl mx-auto py-16 flex flex-col gap-8">
      <section className="grid grid-cols-5 gap-4">
        <div className="col-span-3 p-4 bg-white shadow-md rounded-xl">
          <h2 className="text-lg font-semibold mb-2">My Tasks:</h2>
          <TaskList items={[]} />
        </div>
        <UserProfileCard user={{ id, firstName, username }} />
      </section>
      <div className="p-4 bg-white shadow-md rounded-xl grid">
        <div className="flex w-full flex-col">
          <JokeWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
