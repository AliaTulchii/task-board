import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './SearchInput.css'

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="search-container">
      <TextField
        label="Search..."
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        fullWidth
        sx={{ marginRight: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
