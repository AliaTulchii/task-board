import { FC } from "react";
import { IUser } from "../../types";
import {  Card, CardContent, Typography } from "@mui/material";
import { COMPANY, EMAIL, NAME, PHONE } from "../User.Constants";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {NAME} {user && typeof user.name === "string" ? user.name : "Unknown user"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {EMAIL} {user && typeof user.email === "string" ? user.email : "Unknown email"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {PHONE} {user && typeof user.phone === "string" ? user.phone : "Unknown phone"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
  {COMPANY} {user && user.company ? (typeof user.company === "object" ? user.company.name : user.company) : "Unknown company"}
</Typography>

      </CardContent>
    </Card>
  );
};



export default UserItem;
