import { TASK_FILTER_OPTIONS } from "../../constants";
import { SquarePlus } from "lucide-react";
import DropDown from "../atoms/DropDown";
import { useTaskStore } from "../../store/useTaskStore";
import { useTaskOptions } from "../../hooks/useTaskOptions";
import { ITaskFormInputs, TaskFilterType } from "../../types";
import CreateForm from "./TaskForm";
import { useModal } from "../../hooks/useModal";
import Modal from "../atoms/Modal";
import { SubmitHandler } from "react-hook-form";

const TaskHeader = () => {
  const { filter, setFilter } = useTaskStore();
  const { isOpen, openModal, closeModal } = useModal();
  const { createTask, isLoading, isError, isSuccess } = useTaskOptions();

  const handleCreate:SubmitHandler<ITaskFormInputs> = ({ title, description }) => {
    createTask({
      title: title,
      description: description ?? "-",
      status: TaskFilterType.Todo,//creating with intial state as others(todo)
    });
  };

  return (
    <>
      <div className="flex justify-between items-center w-full mb-6">
        <h2 className="text-lg font-semibold mb-2 text-secondary-color">
          My Tasks
        </h2>
        {/* Create New Task */}
        <div className="flex gap-2">
          <button
            aria-label="Add new task"
            title="Add a new task"
            className="text-secondary-color"
            onClick={() => openModal()}
          >
            <SquarePlus aria-hidden={true} strokeWidth={1} />
          </button>

          {/* Filter Task List */}
          <DropDown
            options={TASK_FILTER_OPTIONS}
            selectedOption={filter}
            handleChange={(value) => setFilter(value as TaskFilterType)}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <CreateForm
          onFormAction={handleCreate}
          closeModal={closeModal}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
        />
      </Modal>
    </>
  );
};

export default TaskHeader;
