import { useQuery } from "@tanstack/react-query";

const fetchJoke = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const data = await response.json();
  if (data.type === "single") {
    return data.joke;
  } else if (data.type === "twopart") {
    return `${data.setup} - ${data.delivery}`;
  }
};

const useFetchJoke = () => {
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["joke"],
    queryFn: fetchJoke,
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });

  return { isPending, isError, data, error, refetch };
};

export default useFetchJoke;
