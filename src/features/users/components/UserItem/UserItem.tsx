import { FC } from "react";
import { IUser } from "../../types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      {user.id}
      {user.name}
      <button>delete</button>
    </div>
  );
};

export default UserItem;
