import React, { useState } from "react";
import { Button } from "@mui/material";
import { UI_TEXT } from "../Components.Constants";
import AddTodoModal from "../AddTodoModal/AddTodoModal";

const AddTodoBtn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    <Button variant="contained" color="primary" onClick={handleClickOpen}>
      {UI_TEXT.ADD_TASK_BUTTON}
    </Button>
    <AddTodoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default AddTodoBtn;
