import React from "react";
import TaskList from "../molecules/TaskList";
import { useQuery } from "@tanstack/react-query";
import TaskHeader from "../molecules/TaskHeader";
import { fetchTasks } from "../../scripts";
import { Task } from "../../types";

const TaskContainer:React.FC = () => {
  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error loading tasks! Please try again...</div>;

  return (
    <>
      <TaskHeader />

      <TaskList tasks={tasks} />
    </>
  );
};

export default TaskContainer;
