import DiscordIcon from "../assets/icons/task/Discord";
import TelegramIcon from "../assets/icons/task/Telegram";
import TwitterIcon from "../assets/icons/task/Twitter";
import DollIcon from "../assets/icons/task/Doll";
import Doll1Icon from "../assets/icons/task/Doll1";
import Doll2Icon from "../assets/icons/task/Doll2";
import HomeIcon from "../assets/icons/navbar/Home";
import FriendsIcon from "../assets/icons/navbar/Friends";
import TaskIcon from "../assets/icons/navbar/Task";
import MineIcon from "../assets/icons/navbar/Mine";
import UTVIcon from "../assets/icons/task/UTV";

export const navbarItems = [
  {
    icon: <HomeIcon width={50} height={50} color={"custom"} />,
    url: "/",
  },
  {
    icon: <FriendsIcon width={50} height={50} color={"custom"} />,
    url: "/leaderboard",
  },
  {
    icon: <TaskIcon width={50} height={50} color={"custom"} />,
    url: "/tasks",
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
    bonus: 10000,
    icon: <TwitterIcon />,
    bgColor: "bg-twitter-btn",
    shadow: "shadow-[0_6px_0px_#1D1D1D,0_12px_1px_#0000001A]",
  },
  {
    id: "reactTelegram",
    title: "React 😘 on the post",
    bonus: 10000,
    icon: <TelegramIcon />,
    bgColor: "bg-telegram-btn",
    shadow: "shadow-[0_6px_0px_#0546BC,0_12px_1px_#0000001A]",
  },
  {
    id: "reactDiscord",
    title: "React 😘 on the post",
    bonus: 10000,
    icon: <DiscordIcon />,
    bgColor: "bg-discord-btn",
    shadow: "shadow-[0_6px_0px_#291DCF,0_12px_1px_#0000001A]",
  },
];

export const normalTasks = [
  {
    id: "taskAnnouncementRTPost",
    title: "Announcement - RT Post",
    bonus: 10000,
    icon: (
      <div className="w-10 h-[38px] p-[2px] rounded bg-task-item-icon-bg">
        <div className="w-full h-full rounded bg-task-item-medal flex justify-center items-center text-[28px]">
          🎖️
        </div>
      </div>
    ),
    bgColor: "bg-medal-btn",
    shadow: "shadow-[0_6px_0px_#CB7C06,0_12px_1px_#0000001A]",
  },
  {
    id: "taskYesKeeper",
    title: "Yes Keeper",
    bonus: 10000,
    icon: (
      <div className="w-10 h-[38px] p-[2px] rounded bg-task-item-icon-bg flex justify-center items-center">
        <img alt="seal" src="/seal.png" />
      </div>
    ),
    bgColor: "bg-seal-btn",
    shadow: "shadow-[0_6px_0px_#007A29,0_12px_1px_#0000001A]",
  },
  {
    id: "taskYesUUniverseRTPost",
    title: "YesUniverse - RT Post",
    bonus: 10000,
    icon: <UTVIcon />,
    bgColor: "bg-utv-btn",
    shadow: "shadow-[0_6px_0px_#6D0002,0_12px_1px_#0000001A]",
  },
  {
    id: "taskYesUniverseRTPost_",
    title: "YesUniverse - RT Post",
    bonus: 10000,
    icon: (
      <div className="w-10 h-[38px] p-[2px] rounded bg-task-item-icon-bg">
        <div className="w-full h-full rounded bg-task-item-jewel flex justify-center items-center text-[28px]">
          💎
        </div>
      </div>
    ),
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
        <p className="text-white text-[12px] font-sf-pro-text">08:05:05</p>
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
