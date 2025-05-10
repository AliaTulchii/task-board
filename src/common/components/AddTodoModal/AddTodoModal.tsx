import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
// import { selectAllUsers, selectUsersLoading } from "../../app/store/selectors/UserSelectors";
import { createTask } from "../../../app/store/reducers/ActionCreators";
import { IUser } from "../../../features/users/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux";
import { selectAllUsers, selectUsersLoading } from "../../../features/users/selectors";

interface AddTodoModalProps {
  open: boolean;
  onClose: () => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const isLoading = useAppSelector(selectUsersLoading);

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState<number | "">("");

  const handleSubmit = () => {
    if (!title || userId === "") return;

    dispatch(createTask({ title, userId, completed: false }));
    setTitle("");
    setUserId("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new  task</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Task "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="user-select-label">User</InputLabel>
          <Select
            labelId="user-select-label"
            value={userId}
            label="user"
            onChange={(e) => setUserId(Number(e.target.value))}
          >
            {isLoading ? (
              <MenuItem value="">
                <CircularProgress size={20} />
              </MenuItem>
            ) : (
              users.map((user: IUser) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={!title || userId === ""}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoModal;
