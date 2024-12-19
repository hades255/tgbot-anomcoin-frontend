import { boosterCoin } from "@helper/func";
import AntiCounter from "@task/AntiCounter";
import DiscordIcon from "@icons/task/Discord";
import TelegramIcon from "@icons/task/Telegram";
import TwitterIcon from "@icons/task/Twitter";
import DollIcon from "@icons/task/Doll";
import Doll1Icon from "@icons/task/Doll1";
import Doll2Icon from "@icons/task/Doll2";
import HomeIcon from "@icons/navbar/Home";
import FriendsIcon from "@icons/navbar/Friends";
import TaskIcon from "@icons/navbar/Task";
import MineIcon from "@icons/navbar/Mine";
import UTVIcon from "@icons/task/UTV";
import AlpCoinsIcon from "@icons/build/AlpCoins";
import CoinsIcon from "@icons/build/Coins";
import LighteningIcon from "@icons/build/Lightening";

export const navbarItems = [
  {
    icon: <HomeIcon width={50} height={50} color={"custom"} />,
    url: "/tasks",
  },
  {
    icon: <FriendsIcon width={50} height={50} color={"custom"} />,
    url: "/frens",
  },
  {
    icon: <TaskIcon width={50} height={50} color={"custom"} />,
    url: "/build",
  },
  {
    icon: <MineIcon width={50} height={50} color={"custom"} />,
    url: "/me",
  },
];

export const dailyTasks = [
  {
    id: "reactTwitter",
    title: "React 😘 on the post",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width, height) => {
      return <TwitterIcon width={width} height={height} />;
    },
    bgColor: "bg-twitter-btn",
    shadow: "shadow-[0_6px_0px_#1D1D1D,0_12px_1px_#0000001A]",
  },
  {
    id: "reactTelegram",
    title: "React 😘 on the post",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width, height) => {
      return <TelegramIcon width={width} height={height} />;
    },
    bgColor: "bg-telegram-btn",
    shadow: "shadow-[0_6px_0px_#0546BC,0_12px_1px_#0000001A]",
  },
  {
    id: "reactDiscord",
    title: "React 😘 on the post",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width, height) => {
      return <DiscordIcon width={width} height={height} />;
    },
    bgColor: "bg-discord-btn",
    shadow: "shadow-[0_6px_0px_#291DCF,0_12px_1px_#0000001A]",
  },
];

export const normalTasks = [
  {
    id: "taskAnnouncementRTPost",
    title: "Announcement - RT Post",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width = 38, height = 38) => {
      return (
        <div
          className="w-10 h-[38px] p-[2px] rounded bg-task-item-icon-bg"
          style={{ height: height, width: width }}
        >
          <div
            className="w-full h-full rounded bg-task-item-medal flex justify-center items-center"
            style={{ fontSize: (height * 3) / 4 }}
          >
            🎖️
          </div>
        </div>
      );
    },
    bgColor: "bg-medal-btn",
    shadow: "shadow-[0_6px_0px_#CB7C06,0_12px_1px_#0000001A]",
  },
  {
    id: "taskYesKeeper",
    title: "Yes Keeper",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width = 38, height = 38) => {
      return (
        <div
          className="w-10 p-[2px] rounded bg-task-item-icon-bg flex justify-center items-center"
          style={{ height: height, width: width }}
        >
          <img alt="seal" src="/seal.png" width={width} height={height} />
        </div>
      );
    },
    bgColor: "bg-seal-btn",
    shadow: "shadow-[0_6px_0px_#007A29,0_12px_1px_#0000001A]",
  },
  {
    id: "taskYesUniverseRTPost",
    title: "YesUniverse - RT Post",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width, height) => {
      return <UTVIcon width={width} height={height} />;
    },
    bgColor: "bg-utv-btn",
    shadow: "shadow-[0_6px_0px_#6D0002,0_12px_1px_#0000001A]",
  },
  {
    id: "taskYesUniverseRTPost_",
    title: "YesUniverse - RT Post",
    subcontent: "React on the post and get reward",
    redirect: "#",
    bonus: 10000,
    icon: (width = 38, height = 38) => {
      return (
        <div
          className="w-10 p-[2px] rounded bg-task-item-icon-bg"
          style={{ height: height, width: width }}
        >
          <div
            className="w-full h-full rounded bg-task-item-jewel flex justify-center items-center"
            style={{ fontSize: (height * 3) / 4 }}
          >
            💎
          </div>
        </div>
      );
    },
    bgColor: "bg-jewel-btn",
    shadow: "shadow-[0_6px_0px_#005560,0_12px_1px_#0000001A]",
  },
];

export const taskTabItems = [
  {
    tab: 0,
    icon: <DollIcon />,
    content: (
      <div>
        <p className="text-white text-[16px] font-sf-pro-text">Daily Task</p>
        <p className="text-white text-[12px] font-sf-pro-text">
          <AntiCounter />
        </p>
      </div>
    ),
  },
  {
    tab: 1,
    icon: <Doll1Icon />,
    content: <p className="text-white text-[16px] font-sf-pro-text">Task</p>,
  },
  {
    tab: 2,
    icon: <Doll2Icon />,
    content: <p className="text-white text-[16px] font-sf-pro-text">Special</p>,
  },
];

export const TASKS = {
  daily: ["reactTwitter", "reactTelegram", "reactDiscord"],
  ot: [
    "taskAnnouncementRTPost",
    "taskYesKeeper",
    "taskYesUniverseRTPost",
    "taskYesUniverseRTPost_",
  ],
  special: [],
};

export const BOOSTERS = [
  {
    id: "multiValue",
    title: "Multi value",
    icon: (width, height) => <AlpCoinsIcon width={width} height={height} />,
    coin: boosterCoin,
    subcontent: "amount value per coin +1 each level",
  },
  {
    id: "coinLimit",
    title: "Coin Limit",
    icon: (width, height) => <CoinsIcon width={width} height={height} />,
    coin: boosterCoin,
    subcontent: "increase total coin Limit +1 for the next level",
  },
  {
    id: "fillRate",
    title: "Fill Rate",
    icon: (width, height) => <LighteningIcon width={width} height={height} />,
    coin: boosterCoin,
    subcontent: "increase coin fill speed +1/sec for each level",
  },
];

/**
 * 100k 1m  10m 30m
 * 100m 1b  10b 100b
 */
export const min_maxByPoint = (miner = 0, rank = 0) => {
  switch (rank) {
    case 0:
      return miner === 0 ? [0, 100000] : [0, 100000000];
    case 1:
      return miner === 0 ? [100000, 1000000] : [100000000, 1000000000];
    case 2:
      return miner === 0 ? [1000000, 10000000] : [1000000000, 10000000000];
    case 3:
      return miner === 0 ? [10000000, 30000000] : [10000000000, 100000000000];
    case 4:
      return miner === 0
        ? [30000000, 100000000000]
        : [100000000000, 10000000000000];
    default:
      return [0, 100000000000];
  }
};

export const EATER = [
  { x: 1, y: 0, eye: { x: 10, y: 5 }, mouth: { start: 0.1, end: 1.95 } },
  { x: 0, y: 1, eye: { x: 10, y: 5 }, mouth: { start: 0.6, end: 0.45 } },
  { x: -1, y: 0, eye: { x: -5, y: 10 }, mouth: { start: 1.1, end: 0.95 } },
  { x: 0, y: -1, eye: { x: 10, y: -5 }, mouth: { start: 1.6, end: 1.45 } },
];
