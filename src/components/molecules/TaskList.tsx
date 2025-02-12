import React, { useCallback, useMemo, useState } from "react";
import {
  ITaskListProps,
  Task,
  TaskFilterType,
} from "../../types";
import { useTaskOptions } from "../../hooks/useTaskOptions";
import TaskListItem from "./TaskListItem";
import { useTaskStore } from "../../store/useTaskStore";
import CreateForm from "./TaskForm";
import { useModal } from "../../hooks/useModal";
import Modal from "../atoms/Modal";

const TaskList: React.FC<ITaskListProps> = ({ tasks }) => {
  const { filter } = useTaskStore();
  const { isOpen, openModal, closeModal } = useModal();

  const {
    updateTask,
    deleteTask,
    isLoading: isMutating,
    isError,
    isSuccess,
  } = useTaskOptions();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: Task) =>
      filter === TaskFilterType.Todo
        ? task.status != TaskFilterType.Completed
        : filter === TaskFilterType.All || task.status === filter
    );
  }, [tasks, filter]);

  const handleUpdateTask = useCallback(
    (task: Task) => {
      const updatedTask = {
        ...task,
        title: task.title,
        description: task.description,
      };

      updateTask(updatedTask);
    },
    [updateTask]
  );

  const handleDeleteTask = useCallback(
    (taskId: string) => {
      deleteTask(taskId);
    },
    [deleteTask]
  );

  const handleEdit = (task:Task) => {
    setSelectedTask(task);
    openModal();
  };

  return (
    <>
      <ul className="flex flex-col gap-4">
        {isMutating && <div className="overlay">Processing...</div>}
        {/* Enhancement: can be optimised with virtualisation, ex:react-window */}
        {filteredTasks.map((task: Task) => (
          <TaskListItem
            key={task.id}
            task={task}
            onUpdate={handleUpdateTask}
            onDelete={handleDeleteTask}
            onEdit={handleEdit}
          />
        ))}
      </ul>

      <Modal isOpen={isOpen} onClose={closeModal}>
        {selectedTask && (
          <CreateForm
            onFormAction={handleUpdateTask}
            closeModal={closeModal}
            isLoading={isMutating}
            isError={isError}
            isSuccess={isSuccess}
            initialFormData={selectedTask}
          />
        )}
      </Modal>

    </>
  );
};

export default TaskList;
