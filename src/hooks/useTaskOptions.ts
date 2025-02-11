import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, updateTask } from "../scripts";

// Custom hook for task actions: create, edit, delete
export const useTaskOptions = () => {
    const queryClient = useQueryClient();
  
    const invalidateTasks = () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    };
  
    const handleError = (error: unknown) => {

        console.error('An unexpected error occurred:', error);
    };
  
    const createTaskMutation = useMutation({
      mutationFn: createTask,
      onSuccess: () => {
        invalidateTasks();
      },
      onError: handleError,
    });
  
    const updateTaskMutation = useMutation({
      mutationFn: updateTask,
      onSuccess: () => {
        invalidateTasks();
      },
      onError: handleError,
    });
  
    const deleteTaskMutation = useMutation({
      mutationFn: deleteTask,
      onSuccess: () => {
        invalidateTasks();
      },
      onError: handleError,
    });
  
    return {
      createTask: createTaskMutation.mutate,
      updateTask: updateTaskMutation.mutate,
      deleteTask: deleteTaskMutation.mutate,
      isLoading: 
        createTaskMutation.isPending || 
        updateTaskMutation.isPending || 
        deleteTaskMutation.isPending,
    };
  };