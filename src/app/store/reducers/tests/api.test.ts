import axios from "axios";
import {
  getUsersResponse,
  getTasksResponse,
  putTaskResponse,
} from "../api";
import { CreateTaskPayload } from "../types";
import { IUser } from "../../../../features/users/types";
import { ITask } from "../../../../features/tasks/types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API Action Creators", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch users correctly", async () => {
    const mockUsers: IUser[] = [
      { id: 1, name: "User1", email: "user1@mail.com" },
      { id: 2, name: "User2", email: "user2@mail.com"  },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: mockUsers });

    const response = await getUsersResponse();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(response.data).toEqual(mockUsers);
  });

  it("should fetch tasks correctly", async () => {
    const mockTasks: ITask[] = [
      { id: 1, userId: 1, title: "Task 1", completed: false },
      { id: 2, userId: 2, title: "Task 2", completed: true },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: mockTasks });

    const response = await getTasksResponse();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
    expect(response.data).toEqual(mockTasks);
  });

  it("should create a new task correctly", async () => {
    const newTask: CreateTaskPayload = {
      title: "New Task",
      completed: false,
      userId: 1,
    };
    const mockResponse: ITask = {
      id: 101,
      ...newTask,
    };
    mockedAxios.post.mockResolvedValueOnce({ data: mockResponse });

    const response = await putTaskResponse(newTask);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos",
      newTask
    );
    expect(response.data).toEqual(mockResponse);
  });
});
