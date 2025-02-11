import { TASK_FILTER_OPTIONS } from "../../constants";
import { SquarePlus } from "lucide-react";
import DropDown from "../atoms/DropDown";
import { useTaskStore } from "../../store/useTaskStore";
import { useTaskOptions } from "../../hooks/useTaskOptions";
import { TaskFilterType } from "../../types";

const TaskHeader = () => {
  const { filter, setFilter } = useTaskStore();

  const { createTask } = useTaskOptions();

  return (
    <div className="flex justify-between items-center w-full mb-6">
      <h2 className="text-lg font-semibold mb-2 text-secondary-color">My Tasks</h2>
      {/* Create New Task */}
      <div className="flex gap-2">
        <button
          aria-label="Add new task"
          title="Add a new task"
          className="text-secondary-color"
          onClick={() =>
            createTask({
              title: "New Task",
              description: "Task Description",
              status: TaskFilterType.Todo,
            })
          }
        >
          <SquarePlus strokeWidth={1} />
        </button>
     
        {/* Filter Task List */}
        <DropDown
          options={TASK_FILTER_OPTIONS}
          selectedOption={filter}
          handleChange={(value) =>
            setFilter(value as TaskFilterType)
          }
        />
      </div>
    </div>
  );
};

export default TaskHeader;
