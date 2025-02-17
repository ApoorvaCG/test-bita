import { ReactNode, useEffect } from "react";
import useShowMessage from "../../hooks/useShowMessage";
import { SquareX } from "lucide-react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
  Path,
} from "react-hook-form";
import { FORM_FIELDS } from "../../constants";

interface FormProps<T extends FieldValues> {
  onFormAction: SubmitHandler<T>;
  closeModal: () => void;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  initialFormData?: T;
}

const TaskForm = <T extends FieldValues = FieldValues>({
  initialFormData,
  onFormAction,
  closeModal,
  isLoading,
  isError,
  isSuccess,
}: FormProps<T>) => {
  const { message, showMessage } = useShowMessage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialFormData as DefaultValues<T>,
  });

  useEffect(() => {
    if (isSuccess) {
      reset(); // Reset form
      showMessage("Task added successfully!");
    }
    if (isError) {
      showMessage("Task creation failed!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isLoading]);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="font-2xl font-medium">
          {!initialFormData ? "New Task" : "Edit Task"}
        </div>
        <span className="text-secondary-color">
          <SquareX size={20} onClick={closeModal} cursor={"pointer"} />
        </span>
      </div>

      <form onSubmit={handleSubmit(onFormAction)} className="space-y-4">
        {FORM_FIELDS.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block text-sm font-medium">
              {field.label}:
              <input
                {...register(field.name as Path<T>, field.validation)}
                type="text"
                placeholder={field.placeholder}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
              {/* Display error message if any */}
              {errors[field.name as keyof T] && (
                <span className="text-red-500 text-sm">
                  {errors[field.name as keyof T]?.message as ReactNode}
                </span>
              )}
            </label>
          </div>
        ))}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? "Adding..." : "Add"}
        </button>
      </form>

      {message && (
        <div style={{ padding: "10px", color: "green" }}>{message}</div>
      )}
    </>
  );
};

export default TaskForm;
