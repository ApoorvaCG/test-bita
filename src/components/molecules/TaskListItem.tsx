import { CheckCircle, SquarePen, Trash2 } from "lucide-react";
import React from "react";
import { ITaskListItemProps, TaskFilterType } from "../../types";

const TaskListItem:React.FC<ITaskListItemProps> = ({ task, onUpdate, onDelete, onEdit }) => {
  return (
    <>
      <li
        key={task.id}
        className={`flex justify-between items-center gap-14 px-3 py-2 bg-gray-50 rounded-lg`}
      >
        {/* Task Info and Mark as Complete */}
        <div className="flex items-start gap-2">
          <button
            title="Mark as complete"
            aria-label="Mark as complete button"
            onClick={() => onUpdate({ ...task, status: TaskFilterType.Completed })}
            className="p-1"
          >
            <CheckCircle
              size={18}
              className={`${
                task.status === TaskFilterType.Completed ? "text-green-500" : "text-slate-400"
              }`}
            />
          </button>
          <div className="flex flex-col items-start w-full gap-1">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p className="text-sm text-secondary-color w-full text-left break-all overflow-y-auto">{task.description || "-"}</p>
          </div>
        </div>

        {/* Task Actions */}
        <div className="flex items-center gap-3">
          <button aria-label="Edit task" className="text-secondary-color" onClick={()=>onEdit(task)}>
            <SquarePen size={14} strokeWidth={1} />
          </button>
          {/* TODO: Confirmation modal for Delete Action */}
          <button onClick={() => onDelete(task.id)} aria-label="Delete task">
            <Trash2 size={14} color="#f9434c" strokeWidth={1} />
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskListItem;
