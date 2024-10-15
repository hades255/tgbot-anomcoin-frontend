import React from "react";
import Profile from "../components/home/Profile";
import Progress from "../components/home/Progress";
import TouchPad from "../components/home/TouchPad";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Home = ({ params }) => {
  const { airdrop } = useSelector((state) => state.coin);

  return (
    <>
      <div className={classNames({ "animate-airdropvibrate": airdrop })}>
        <TouchPad />
        <div className="fixed top-0 left-0 w-full p-4 flex flex-col">
          <Profile />
          <Progress />
        </div>
      </div>
      <Navbar params={params} />
    </>
  );
};

export default Home;
