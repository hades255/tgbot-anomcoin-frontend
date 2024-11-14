import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { coincounter, progresscounter } from "@redux/coinSlice";

const CoinHelper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cointimerFunc = () => {
      dispatch(coincounter());
    };
    const cointimer = setInterval(() => {
      cointimerFunc();
    }, 30);
    const progresstimerFunc = () => {
      dispatch(progresscounter());
    };
    const progresstimer = setInterval(() => {
      progresstimerFunc();
    }, 1000);
    return () => {
      clearInterval(cointimer);
      clearInterval(progresstimer);
    };
  }, [dispatch]);
  return null;
};

export default CoinHelper;
