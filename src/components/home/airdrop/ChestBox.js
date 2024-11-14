import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { disappearChestBox, startAirdrop } from "@redux/coinSlice";
import ChestIcon from "@icons/Chest";

const ChestBox = () => {
  const dispatch = useDispatch();
  const { chestbox } = useSelector((state) => state.coin);

  const handleMouseEnter = useCallback(() => {
    const timeout = setTimeout(() => {
      dispatch(disappearChestBox());
      dispatch(startAirdrop());
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch]);

  return (
    chestbox && (
      <div
        className={`w-11 h-11 transition-transform transform hover:scale-105 hover:animate-chestboxvibrate hover:cursor-pointer`}
        onMouseEnter={handleMouseEnter}
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
