import React from "react";
import { RotateCw } from "lucide-react";
import useFetchJoke from "../../hooks/useFetchJoke";

const JokeWidget: React.FC = () => {
  const { isPending, isError, data, refetch } = useFetchJoke();

  const handleClick = () => {
    refetch();
  };

  return (
    <>
      <div className="flex justify-center items-center gap-8 w-full">
        <h2 className="text-lg text-slate-800 mb-6">
          Something to lighten up your day!
        </h2>
        <button
          onClick={handleClick}
          disabled={isPending}
          className="bg-black ml-auto self-start rounded-full p-2 hover:shadow-md hover:shadow-gray-500/50"
        >
          <RotateCw size={10} color="white" />
        </button>
      </div>
      <p className="text-xl break-words">{isError? 'Something went wrong!' :data}</p>
    </>
  );
};

export default JokeWidget;
