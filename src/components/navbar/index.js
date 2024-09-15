import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import HomeIcon from "../../assets/icons/Home";
import { login } from "../../redux/authSlice";
import NavbarItem from "./NavbarItem";
import { BACKEND_PATH } from "../../constants/config";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = ({ params }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const [active, setActive] = useState("/");

  const navbar = useMemo(() => {
    return [
      {
        icon: <HomeIcon width={50} height={50} color={"custom"} />,
        url: "/",
      },
      {
        icon: <HomeIcon width={50} height={50} color={"custom"} />,
        url: "/leaderboard",
      },
      {
        icon: <HomeIcon width={50} height={50} color={"custom"} />,
        url: "/tasks",
      },
      {
        icon: <HomeIcon width={50} height={50} color={"custom"} />,
        url: "/me",
      },
    ];
  }, []);

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );

  /*
  useEffect(() => {
    if (isAuthenticated || !params || !params.user) return;
    const userId = params.user.id;
    const username = params.user.username;
    const name = params.user.first_name + " " + params.user.last_name;
    let refer = queryParams.get("refer");
    if (params.start_param) {
      refer = params.start_param.toString().substring(9);
    }
    if (userId) {
      (async () => {
        try {
          const response = await axios.get(
            `${BACKEND_PATH}/user?userId=${userId}&name=${name}&username=${username}&refer=${refer}`
          );
          const point = response.data.point;
          const user = response.data.user;
          const bonus = response.data.bonus;
          dispatch(login({ ...user, userId, point, name, username }));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [queryParams, params, dispatch, isAuthenticated]);
  */

  useEffect(() => {
    setActive(location.pathname);
  }, [location, dispatch]);

  return (
    <>
      <div className="w-full fixed bottom-0 mx-auto z-30">
        <div className="flex justify-center h-20 bg-[#000713] px-3">
          {navbar.map((item, index) => (
            <NavbarItem {...item} key={index} active={active === item.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
