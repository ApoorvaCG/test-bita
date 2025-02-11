const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const BASE_API_URL = "https://67a9dd2865ab088ea7e4c399.mockapi.io/api/tasks";

const JOKE_API_URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

const TASK_FILTER_OPTIONS = [
  { id: 1, text: "All", value: "all" },
  { id: 2, text: "Completed", value: "completed" },
  { id: 3, text: "Todo", value: "others" },
];

const FORM_FIELDS = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter task name",
    validation: {
      required: "Title is required",
      minLength: { value: 3, message: "Title must be at least 3 characters" },
      maxLength: { value: 25, message: "Max. of 25 characters allowed" },
    },
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Brief description",
    validation: {
      maxLength: { value: 100, message: "Max. of 100 characters allowed" },
    },
  },
];

export {
  CLERK_PUBLISHABLE_KEY,
  BASE_API_URL,
  TASK_FILTER_OPTIONS,
  JOKE_API_URL,
  FORM_FIELDS,
};
