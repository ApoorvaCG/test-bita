import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";
import { TaskFilterType } from "../../types";
import "@testing-library/jest-dom";
import { useTaskStore } from "../../store/useTaskStore";

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


jest.mock('../../store/useTaskStore');
// Sample tasks for testing
const mockTasks = [
  { id: "1", title: "Task 1", description: "Description 1", status: TaskFilterType.Todo },
  { id: "2", title: "Task 2", description: "Description 2", status: TaskFilterType.Completed },
];

describe("TaskList Component", () => {
  beforeAll(() => {
    const mockedUseTaskStore = useTaskStore as jest.MockedFunction<typeof useTaskStore>;
    mockedUseTaskStore.mockImplementation(() => ({
      filter: TaskFilterType.Todo,
      tasks: mockTasks,
    }));
  });

  test('filters tasks correctly based on filter', () => {
    render(<TaskList tasks={mockTasks} />);

    // Check if only the 'Todo' task is rendered
    const task1 = screen.getByText('Task 1');
    const task2 = screen.queryByText('Task 2');

    expect(task1).toBeInTheDocument();
    expect(task2).not.toBeInTheDocument();
  });
});
