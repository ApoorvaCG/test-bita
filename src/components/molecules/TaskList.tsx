import React, { useCallback, useMemo } from "react";
import { ITaskListProps, Task, TaskFilterType } from "../../types";
import { useTaskOptions } from "../../hooks/useTaskOptions";
import TaskListItem from "./TaskListItem";
import { useTaskStore } from "../../store/useTaskStore";

const TaskList: React.FC<ITaskListProps> = ({ tasks }) => {
  const { filter } = useTaskStore();

  const { updateTask, deleteTask, isLoading: isMutating } = useTaskOptions();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: Task) =>
      filter === TaskFilterType.Todo
        ? task.status != TaskFilterType.Completed
        : filter === TaskFilterType.All || task.status === filter
    );
  }, [tasks, filter]);

  const handleUpdateTask = useCallback(
    (task: Task) => {
      updateTask(task);
    },
    [updateTask]
  );

  const handleDeleteTask = useCallback(
    (taskId: string) => {
      deleteTask(taskId);
    },
    [deleteTask]
  );

  return (
    <ul className="flex flex-col gap-4">
      {isMutating && <div className="overlay">Processing...</div>}
      {/* Todo: can be optimised with virtualisation, ex:react-window */}
      {filteredTasks.map((task: Task) => (
        <TaskListItem
          key={task.id}
          task={task}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
