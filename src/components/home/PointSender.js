import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { pointSender } from "../../redux/coinSlice";

const PointSender = () => {
  const dispatch = useDispatch();
  const { userId } = useAuth();

  useEffect(() => {
    if (userId === "") return;
    const timerFunc = () => {
      setTimeout(() => {
        timerFunc();
      }, 5000);
      dispatch(pointSender(userId));
    };
    timerFunc();
  }, [dispatch, userId]);

  return <></>;
};

export default PointSender;
