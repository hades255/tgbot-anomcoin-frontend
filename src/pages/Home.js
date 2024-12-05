import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Profile from "@home/Profile";
import Progress from "@home/Progress";
import TouchPad from "@home/TouchPad";
import ShakeDetector from "@home/ShakeDetector";
import Navbar from "@navbar";

const Home = ({ params }) => {
  const { airdrop } = useSelector((state) => state.coin);

  return (
    <>
      <ShakeDetector />
      <div className={clsx({ "animate-airdropvibrate": airdrop })}>
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
