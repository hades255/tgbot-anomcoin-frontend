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
