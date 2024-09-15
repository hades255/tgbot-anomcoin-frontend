import React from "react";
import Profile from "../components/home/Profile";
import Progress from "../components/home/Progress";
import CoinGround from "../components/home/CoinGround";

const Home = () => {
  return (
    <div className="p-4">
      <Profile />
      <Progress />
      <CoinGround />
    </div>
  );
};

export default Home;
