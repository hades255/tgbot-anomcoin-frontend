import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChestIcon from "../../../assets/icons/Chest";
import { disappearChestBox, startAirdrop } from "../../../redux/coinSlice";

const ChestBox = () => {
  const dispatch = useDispatch();
  const { chestbox } = useSelector((state) => state.coin);

  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = useCallback(() => {
    const timeout = setTimeout(() => {
      dispatch(disappearChestBox());
      dispatch(startAirdrop());
    }, 1000);
    setHoverTimeout(timeout);
  }, [dispatch]);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(hoverTimeout);
  }, [hoverTimeout]);

  return (
    chestbox && (
      <div
        className={`w-11 h-11 transition-transform transform hover:scale-105 hover:animate-chestboxvibrate hover:cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "absolute",
          left: chestbox.x + 25,
          top: chestbox.y + 192,
        }}
      >
        <ChestIcon width={48} height={48} />
      </div>
    )
  );
};

export default ChestBox;
