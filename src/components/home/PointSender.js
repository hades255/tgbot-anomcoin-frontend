import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "@contexts/AuthContext";
import { appearChestBox, pointSender } from "@redux/coinSlice";

const PointSender = () => {
  const dispatch = useDispatch();
  const { userId } = useAuth();

  useEffect(() => {
    const chestTimerFunc = () => {
      dispatch(appearChestBox());
    };
    const chestTimer = setTimeout(
      chestTimerFunc,
      20000 + Math.random() * 20000
    );

    if (userId === "") return;
    const timerFunc = () => {
      dispatch(pointSender(userId));
    };
    const timer = setInterval(timerFunc, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(chestTimer);
    };
  }, [dispatch, userId]);

  return <></>;
};

export default PointSender;
