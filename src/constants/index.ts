const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const BASE_API_URL = 'https://67a9dd2865ab088ea7e4c399.mockapi.io/api/tasks';

const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const TASK_FILTER_OPTIONS = [
    { id: 1, text: "All", value: "all" },
    { id: 2, text: "Completed", value: "completed" },
    { id: 3, text: "Todo", value: "others" },
  ];

export { CLERK_PUBLISHABLE_KEY, BASE_API_URL, TASK_FILTER_OPTIONS, JOKE_API_URL };
