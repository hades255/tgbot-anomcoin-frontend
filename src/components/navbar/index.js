import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BACKEND_PATH } from "@constants/config";
import { navbarItems } from "@constants/constants";
import { queryStringToObject } from "@helper/func";
import { useAuth } from "@contexts/AuthContext";
import { login } from "@redux/authSlice";
import { initCoin, setScore } from "@redux/coinSlice";
import { initOTTask, initTask } from "@redux/taskSlice";
import NavbarItem from "./NavbarItem";

const Navbar = ({ params }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const [active, setActive] = useState("/");

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );

  const params_ = useMemo(() => queryStringToObject(params), [params]);

  useEffect(() => {
    if (isAuthenticated || !params || !params_.user) return;
    const userId = params_.user.id;
    const username = params_.user.username;
    const name = params_.user.first_name + " " + params_.user.last_name;
    let refer = queryParams.get("refer");
    if (params_.start_param) {
      refer = params_.start_param.toString().substring(9);
    }
    if (userId) {
      (async () => {
        try {
          const response = await axios.get(
            `${BACKEND_PATH}/user?userId=${userId}&name=${name}&username=${username}&refer=${refer}`
          );
          console.log(response.data);
          const point = response.data.point;
          const user = response.data.user;
          const task = response.data.task;
          const coin = response.data.coin;
          const otTasks = response.data.otTasks;
          // const bonus = response.data.bonus;
          dispatch(login({ ...user, userId, name, username }));
          dispatch(setScore(point));
          dispatch(initTask(task));
          dispatch(initOTTask(otTasks));
          dispatch(initCoin(coin));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [queryParams, params, params_, dispatch, isAuthenticated]);

  useEffect(() => {
    setActive(location.pathname);
  }, [location, dispatch]);

  return (
    <>
      <div className="w-full fixed bottom-0 mx-auto z-30">
        <div className="flex justify-center h-32 bg-[#0007] px-3 pt-5 gap-3">
          {navbarItems.map((item, index) => (
            <NavbarItem {...item} key={index} active={active === item.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
