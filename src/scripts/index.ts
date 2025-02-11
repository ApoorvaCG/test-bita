import { BASE_API_URL } from "../constants";
import { Task } from "../types";

//generic function to handle api response
async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
    console.error(`API Error: ${response.status} ${response.statusText}`)
    }
    return response.json();
  }
  
  // API methods for CRUD operations
  export const fetchTasks = async (): Promise<Task[]> => {
    const response = await fetch(BASE_API_URL);
    return handleResponse<Task[]>(response);
  };
  
  export const createTask = async (task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> => {   
    const response = await fetch(BASE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...task,
        createdAt: new Date().toISOString(),
      }),
    });
    return handleResponse<Task>(response);
  };
  
  export const updateTask = async (task: Task): Promise<Task> => {
    const response = await fetch(`${BASE_API_URL}/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return handleResponse<Task>(response);
  };
  
  export const deleteTask = async (taskId: string): Promise<void> => {
    const response = await fetch(`${BASE_API_URL}/${taskId}`, {
      method: 'DELETE',
    });
    return handleResponse<void>(response);
  };