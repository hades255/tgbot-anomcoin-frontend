import React from "react";
import Profile from "../components/home/Profile";
import Progress from "../components/home/Progress";
import TouchPad from "../components/home/TouchPad";

const Home = () => {
  return (
    <div>
      <TouchPad />
      <div className="fixed top-0 left-0 w-full p-4 flex flex-col">
        <Profile />
        <Progress />
      </div>
    </div>
  );
};

export default Home;
