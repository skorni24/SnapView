import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Srinivas",
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PkW4fJsvhTn3s9hnv2nSU7a5jkGYsUH9Zl7YOHZKeA&s",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
