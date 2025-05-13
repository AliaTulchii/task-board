import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./Dashboard";
import * as reduxHooks from "../../app/hooks/redux";
import * as usersSlice from "../../features/users/UserSlice";
import * as tasksSlice from "../../features/tasks/TaskSlice";
import * as paginationSlice from "../../features/pagination/paginationSlice";
import { CompletedFilter } from "../../common/types";


jest.mock("../../features/tasks/components/TaskList/TaskList", () => () => <div>Mock TaskList</div>);
jest.mock("../../features/pagination/components/Pagination", () => ({ totalItems }: { totalItems: number }) => <div>Mock Pagination: {totalItems}</div>);

describe("Dashboard", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(reduxHooks, "useAppDispatch").mockReturnValue(mockDispatch);


    jest.spyOn(paginationSlice, "usePaginationSelector").mockReturnValue({
      currentPage: 1,
      itemsPerPage: 10,
    });
  });

  it("show LOADING, if users or tasks are empty", () => {
    jest.spyOn(usersSlice, "useUsersSelector").mockReturnValue({ 
        users: [],
        isLoading: false,
        error: '', 
    });
    jest.spyOn(tasksSlice, "useTasksSelector").mockReturnValue({
         tasks: [],
         isLoading: false,
         error: '',
         });

    render(<Dashboard completedFilter={CompletedFilter.ALL} usernameFilter="" />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("render TaskList and Pagination with right data", () => {
    const mockUsers = [{ id: 1, name: "Alice", email: 'alice@gmail.com' }];
    const mockTasks = [
      { id: 1, userId: 1, title: "Task A", completed: false },
      { id: 2, userId: 1, title: "Task B", completed: true },
      { id: 3, userId: 1, title: "Task C", completed: false },
    ];

    jest.spyOn(usersSlice, "useUsersSelector").mockReturnValue({ 
        users: mockUsers,
        isLoading: true,
        error: ''
     });
    jest.spyOn(tasksSlice, "useTasksSelector").mockReturnValue({ 
        tasks: mockTasks,
        isLoading: true,
        error: ''
     });

    render(<Dashboard completedFilter={CompletedFilter.ALL} usernameFilter="" />);

    expect(screen.getByText("Mock TaskList")).toBeInTheDocument();
    expect(screen.getByText("Mock Pagination: 3")).toBeInTheDocument(); 
  });
});
