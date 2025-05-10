import React, { useState } from "react";
import { Button } from "@mui/material";
import { UI_TEXT } from "../Components.Constants";
import AddTodoModal from "../AddTodoModal/AddTodoModal";

const AddTodoBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
    <Button variant="contained" color="primary" onClick={handleClickOpen}>
      {UI_TEXT.ADD_TASK_BUTTON}
    </Button>
    <AddTodoModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default AddTodoBtn;
