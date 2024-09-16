import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { coincounter, progresscounter } from "../redux/coinSlice";

const CoinHelper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cointimerFunc = () => {
      dispatch(coincounter());
    };
    const cointimer = setInterval(() => {
      cointimerFunc();
    }, 200);
    const progresstimerFunc = () => {
      dispatch(progresscounter());
    };
    const progresstimer = setInterval(() => {
      progresstimerFunc();
    }, 600);
    return () => {
      clearInterval(cointimer);
      clearInterval(progresstimer);
    };
  }, [dispatch]);
  return null;
};

export default CoinHelper;
