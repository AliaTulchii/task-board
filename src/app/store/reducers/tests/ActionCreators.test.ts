import axios from "axios";
import { fetchUsers, fetchTasks, createTask } from "../ActionCreators"; // адаптуй шлях!
import { USERS_FETCH_ALL_API, TASKS_FETCH_ALL_API, TASK_CREATE } from "../Action.Constants";
import { CreateTaskPayload } from "../types";
import { IUser } from "../../../../features/users/types";
import { ITask } from "../../../../features/tasks/types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Async Thunks", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchUsers", () => {
    it("dispatches fulfilled action on success", async () => {
      const users: IUser[] = [{ id: 1, name: "User1", email: "user1@mail.com"}];
      mockedAxios.get.mockResolvedValueOnce({ data: users });

      const thunk = fetchUsers();
      const dispatch = jest.fn();
      const getState = jest.fn();

      const result = await thunk(dispatch, getState, undefined);

      expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining("/users"));
      expect(result.payload).toEqual(users);
      expect(result.type).toBe(`${USERS_FETCH_ALL_API}/fulfilled`);
    });

    it("dispatches rejected action on error", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("Fetch failed"));

      const thunk = fetchUsers();
      const dispatch = jest.fn();
      const getState = jest.fn();

      const result = await thunk(dispatch, getState, undefined);

      expect(result.type).toBe(`${USERS_FETCH_ALL_API}/rejected`);
      expect(result.payload).toBe("Fetch failed");
    });
  });

  describe("fetchTasks", () => {
    it("dispatches fulfilled action on success", async () => {
      const tasks: ITask[] = [{ id: 1, userId:1, title: "Test task", completed: false }];
      mockedAxios.get.mockResolvedValueOnce({ data: tasks });

      const thunk = fetchTasks();
      const dispatch = jest.fn();
      const getState = jest.fn();

      const result = await thunk(dispatch, getState, undefined);

      expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining("/todos"));
      expect(result.payload).toEqual(tasks);
      expect(result.type).toBe(`${TASKS_FETCH_ALL_API}/fulfilled`);
    });

    it("dispatches rejected action on error", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("Tasks error"));

      const thunk = fetchTasks();
      const dispatch = jest.fn();
      const getState = jest.fn();

      const result = await thunk(dispatch, getState, undefined);

      expect(result.type).toBe(`${TASKS_FETCH_ALL_API}/rejected`);
      expect(result.payload).toBe("Tasks error");
    });
  });

  describe("createTask", () => {
    it("dispatches fulfilled action on success", async () => {
      const newTask: CreateTaskPayload = {
        userId: 1,
        title: "New Task",
        completed: false,
      };

      const createdTask: ITask = { ...newTask, id: 101 };

      mockedAxios.post.mockResolvedValueOnce({ data: createdTask });

      const thunk = createTask(newTask);
      const dispatch = jest.fn();
      const getState = jest.fn();

      const result = await thunk(dispatch, getState, undefined);

      expect(mockedAxios.post).toHaveBeenCalledWith(expect.stringContaining("/todos"), newTask);
      expect(result.payload).toEqual(createdTask);
      expect(result.type).toBe(`${TASK_CREATE}/fulfilled`);
    });

    it("dispatches rejected action on error", async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error("Create error"));

      const newTask: CreateTaskPayload = {
        userId: 1,
        title: "Failing Task",
        completed: false,
      };

      const thunk = createTask(newTask);
      const dispatch = jest.fn();
      const getState = jest.fn();

      const result = await thunk(dispatch, getState, undefined);

      expect(result.type).toBe(`${TASK_CREATE}/rejected`);
      expect(result.payload).toBe("Create error");
    });
  });
});
