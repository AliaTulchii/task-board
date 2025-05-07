import React, { useState } from "react";
import { Button } from "@mui/material";
import { UI_TEXT } from "../Components.Constants";

const AddTodoBtn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClickOpen}>
      {UI_TEXT.ADD_TASK_BUTTON}
    </Button>
  );
};

export default AddTodoBtn;
