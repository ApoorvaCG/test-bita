import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import { TaskFilterType } from "../../types";
import "@testing-library/jest-dom";

/*
 * Jest: Mock data for the package is not working
 */
// jest.mock("lucide-react", () => ({
//     Circle: () => <svg data-testid="icon-circle" />, // Mock specific icons
//     Trash: () => <svg data-testid="icon-trash" />,
//   }));

// Mocking the custom hooks used in the component
jest.mock("../../hooks/useTaskOptions", () => ({
  useTaskOptions: () => ({
    updateTask: jest.fn(),
    deleteTask: jest.fn(),
    isLoading: false,
    isError: false,
    isSuccess: false,
  }),
}));

jest.mock("../../store/useTaskStore", () => ({
  useTaskStore: () => ({
    filter: TaskFilterType.All, // Testing with the "All" filter
  }),
}));

// Sample tasks for testing
const mockTasks = [
  { id: "1", title: "Task 1", description: "Description 1", status: TaskFilterType.Todo },
  { id: "2", title: "Task 2", description: "Description 2", status: TaskFilterType.Completed },
];

describe("TaskList Component", () => {

  test("filters tasks correctly based on filter", () => {
    // Change the filter to 'Todo' for testing
    jest.mock("../../store/useTaskStore", () => ({
      useTaskStore: () => ({
        filter: TaskFilterType.Todo,
      }),
    }));

    render(<TaskList tasks={mockTasks} />);

    // Check if only the 'Todo' task is rendered
    const task1 = screen.getByText("Task 1");
    const task2 = screen.queryByText("Task 2");

    expect(task1).toBeInTheDocument();
    expect(task2).not.toBeInTheDocument();
  });
});
