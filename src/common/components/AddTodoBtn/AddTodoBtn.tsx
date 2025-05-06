import React, { useState } from 'react';
import { Button,  } from '@mui/material';

const AddTodoBtn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // Відкриття модалки
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Task
      </Button>

    </div>
  );
};

export default AddTodoBtn;
