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
      dispatch(pointSender(userId));
    };
    const timer = setInterval(() => {
      timerFunc();
    }, 5000);
    return () => clearInterval(timer);
  }, [dispatch, userId]);

  return <></>;
};

export default PointSender;
