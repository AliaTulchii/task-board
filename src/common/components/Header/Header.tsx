import { NavLink } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import AddTodoBtn from "../AddTodoBtn/AddTodoBtn";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Toolbar,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useUsersSelector } from "../../../features/users/UserSlice";
import {
  BUTTON_HOME,
  BUTTON_USERS,
  INPUT_LABEL_COMPLETED,
  INPUT_LABEL_USERNAME,
  MENU_ITEM_ALL,
  MENU_ITEM_FALSE,
  MENU_ITEM_TRUE,
} from "./Header.Constants";

interface HeaderProps {
  usernameFilter: string;
  completedFilter: string;
  onUsernameChange: Dispatch<SetStateAction<string>>;
  onCompletedChange: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({
  usernameFilter,
  completedFilter,
  onUsernameChange,
  onCompletedChange,
}) => {
  const { users } = useUsersSelector();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-around", flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            {BUTTON_HOME}
          </Button>
          <Button
            component={NavLink}
            to="/users"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            {BUTTON_USERS}
          </Button>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <SearchInput />
          <AddTodoBtn />

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>{INPUT_LABEL_USERNAME}</InputLabel>
            <Select
              value={usernameFilter}
              label="Username"
              onChange={(e) => onUsernameChange(e.target.value)}
            >
              <MenuItem value="">{MENU_ITEM_ALL}</MenuItem>
              {users.map((user) => (
                <MenuItem key={user.id} value={user.name}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 130 }}>
            <InputLabel>={INPUT_LABEL_COMPLETED}</InputLabel>
            <Select
              value={completedFilter}
              label="Completed"
              onChange={(e) => onCompletedChange(e.target.value)}
            >
              <MenuItem value="">{MENU_ITEM_ALL}</MenuItem>
              <MenuItem value="true">{MENU_ITEM_TRUE}</MenuItem>
              <MenuItem value="false">{MENU_ITEM_FALSE}</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
