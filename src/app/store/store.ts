import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/users/UserSlice";
import taskReducer from "../../features/tasks/TaskSlice";
import paginationReducer from '../../features/pagination/paginationSlice'
import { userApi } from "../services/UserService";
import { taskApi } from "../services/TasksService";

const rootReducer = combineReducers({
  users: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  tasks: taskReducer,
  [taskApi.reducerPath]: taskApi.reducer,
  pagination: paginationReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware, taskApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
