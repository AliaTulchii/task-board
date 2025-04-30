// import React, { useEffect, useState } from 'react';
// import { Select, MenuItem, InputLabel, FormControl, Button, CircularProgress } from '@mui/material';
// import { fetchUsers } from '../../../../app/store/redusers/ActionCreators';
// import { useAppDispatch, useAppSelector } from '../../../../app/hooks/redux';


// interface UserFilterProps {
//   onFilter: (username: string) => void; 
// }

// const UserFilter: React.FC<UserFilterProps> = () => {
//   const [selectedUser, setSelectedUser] = useState<string>('');
//   const dispatch = useAppDispatch()
//   const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  
//   useEffect(()=> {
//   dispatch(fetchUsers())
//   }, [])

//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedUser(event.target.value as string);
//   };



//   if (isLoading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <FormControl fullWidth margin="normal">
//         <InputLabel id="user-select-label">Filter by User</InputLabel>
//         <Select
//           labelId="user-select-label"
//           value={selectedUser}
//           onChange={handleChange}
//           label="Filter by User"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           {users.map((user: string, index: number) => (
//             <MenuItem key={index} value={user}>
//               {user}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleFilter}
//         disabled={!selectedUser}
//       >
//         Filter
//       </Button>
//     </div>
//   );
// };

// export default UserFilter;
