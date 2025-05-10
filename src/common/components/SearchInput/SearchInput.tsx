import React, { useState } from "react";
import { TextField, Stack, InputAdornment, IconButton } from "@mui/material";
import "./SearchInput.css";
import { UI_TEXT } from "../Components.Constants";
import { useUsersSelector } from "../../../features/users/UserSlice";
import { IUser } from "../../../features/users/types";

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({searchTerm, onSearchChange}) => {
const { users } = useUsersSelector();
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleSearch = () => {
    const result = users.filter((user: IUser) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredUsers(result);
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
                sx={{ width: 80, fontSize: 16, backgroundColor: 'white', borderRadius: 1 }}
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
