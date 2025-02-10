import React from "react";
import { useAuthUser } from "../hooks/useAuthUser";
import { UserResource } from "@clerk/types";
import webdesign from "../assets/web-design.png";
import JokeWidget from "../components/molecules/JokeWidget";

const Dashboard: React.FC = () => {
  const { isLoading, isAuthenticated, user } = useAuthUser();

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Please sign in</p>;

  const { firstName, id, username } = user as UserResource;

  return (
    <div className="max-w-7xl mx-auto py-16 flex flex-col gap-8">
      <section className="grid grid-cols-5 gap-4">
        <div className="col-span-3 p-4 bg-white shadow-md rounded-xl">
          <h2 className="text-lg font-semibold mb-2">Post Items:</h2>
          <ul className="list-disc pl-4 text-gray-700">
            <li>Item 1</li>
          </ul>
        </div>
        <div className="col-span-2 flex bg-white shadow-lg rounded-xl p-10 w-full items-center gap-10">
          <img
            src={webdesign}
            alt="Description of the image"
            width={80}
            height={80}
          />
          <div className="flex flex-col items-start gap-1 ">
            <h1 className="text-3xl font-bold flex gap-2">
              Hello
              <h1 className=" font-extrabold text-purple-600">
                {id ? username : firstName}!
              </h1>
            </h1>
            <p className="text-base text-gray-700 ">Manage your tasks here!</p>
          </div>
        </div>
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
