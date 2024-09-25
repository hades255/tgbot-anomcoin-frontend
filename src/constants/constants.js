import DiscordIcon from "../assets/icons/task/Discord";
import TelegramIcon from "../assets/icons/task/Telegram";
import TwitterIcon from "../assets/icons/task/Twitter";

export const dailyTasks = [
  {
    id: "reactTwitter",
    title: "React 😘 on the post",
    bonus: 10000,
    icon: <TwitterIcon />,
    bgColor: "bg-twitter-btn",
    shadow: "shadow-[0_6px_0px_#1D1D1D,0_12px_2px_#0000001A]",
  },
  {
    id: "reactTelegram",
    title: "React 😘 on the post",
    bonus: 10000,
    icon: <TelegramIcon />,
    bgColor: "bg-telegram-btn",
    shadow: "shadow-[0_6px_0px_#0546BC,0_12px_2px_#0000001A]",
  },
  {
    id: "reactDiscord",
    title: "React 😘 on the post",
    bonus: 10000,
    icon: <DiscordIcon />,
    bgColor: "bg-discord-btn",
    shadow: "shadow-[0_6px_0px_#291DCF,0_12px_2px_#0000001A]",
  },
];
