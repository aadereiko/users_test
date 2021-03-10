import React from "react";
import { UsersContainer } from "../Users/UsersContainer";
import { Header } from "./Header/Header";

export const Main = () => {
  return (
    <div>
      <Header />
      <UsersContainer />
    </div>
  );
};
