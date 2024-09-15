import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import buttonSfx from "../../assets/audios/button.mp3";
import { usePlaySound } from "../../contexts/SoundContext";

const NavbarItem = ({ title, icon, url, active }) => {
  const navigate = useNavigate();
  const { sound } = usePlaySound();
  const [playButtonSfx] = useSound(buttonSfx, { soundEnabled: sound });

  const handleClick = useCallback(() => {
    playButtonSfx();
    navigate(url);
  }, [navigate, url, playButtonSfx]);

  return (
    <div
      className="flex justify-center items-center h-[77px] w-[77px] hover:cursor-pointer bg-navbar-item rounded shadow-navbar-item"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center h-[71px] w-[71px] bg-[#00040C]">
        {icon}
      </div>
    </div>
  );
};

export default NavbarItem;
