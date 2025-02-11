import { useQuery } from "@tanstack/react-query";
import { JOKE_API_URL } from "../constants";
import { JokeType } from "../types";

const fetchJoke = async () => {
  const response = await fetch(JOKE_API_URL);
  const data = await response.json();
  if (data.type === JokeType.Single) {
    return data.joke;
  } else if (data.type === JokeType.TwoPart) {
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
