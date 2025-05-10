
import { CompletedFilter } from "../../../common/types";
import { ITask } from "../../../features/tasks/types";
import { IUser } from "../../../features/users/types";
import { filterTasks } from "./filterTasks";

const tasks: ITask[] = [
  { id: 1, title: "Task 1", completed: true, userId: 1 },
  { id: 2, title: "Task 2", completed: false, userId: 2 },
  { id: 3, title: "Task 3", completed: true, userId: 2 },
];

const users: IUser[] = [
  { id: 1, name: "Alice", email: "user1@mail.com" },
  { id: 2, name: "Bob", email: "user2@mail.com" },
];

describe("filterTasks", () => {
  it("should return all tasks when filter is ALL and no username filter", () => {
    const result = filterTasks({
      tasks,
      users,
      completedFilter: CompletedFilter.ALL,
      usernameFilter: "",
    });

    expect(result).toEqual(tasks);
  });

  it("should return only completed tasks", () => {
    const result = filterTasks({
      tasks,
      users,
      completedFilter: CompletedFilter.YES,
      usernameFilter: "",
    });

    expect(result).toEqual([
      { id: 1, title: "Task 1", completed: true, userId: 1 },
      { id: 3, title: "Task 3", completed: true, userId: 2 },
    ]);
  });

  it("should return only not completed tasks", () => {
    const result = filterTasks({
      tasks,
      users,
      completedFilter: CompletedFilter.NO,
      usernameFilter: "",
    });

    expect(result).toEqual([
      { id: 2, title: "Task 2", completed: false, userId: 2 },
    ]);
  });

  it("should filter by username", () => {
    const result = filterTasks({
      tasks,
      users,
      completedFilter: CompletedFilter.ALL,
      usernameFilter: "ali",
    });

    expect(result).toEqual([
      { id: 1, title: "Task 1", completed: true, userId: 1 },
    ]);
  });

  it("should return all tasks and users if no match", () => {
    const result = filterTasks({
      tasks,
      users,
      completedFilter: CompletedFilter.ALL,
      usernameFilter: "nonexistent",
    });

    expect(result).toEqual([]);
  });
});
