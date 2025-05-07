import React, { useState } from "react";
import { TextField, Stack, InputAdornment, IconButton } from "@mui/material";
import "./SearchInput.css";
import { UI_TEXT } from "../Components.Constants";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search term:", searchTerm);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TextField
        label={UI_TEXT.SEARCH_INPUT_LABEL}
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleSearch}
                edge="end"
                sx={{ with: 30, fontSize: 16, color: "white" }}
              >
                {UI_TEXT.SEARCH_BUTTON}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default SearchInput;
