import React from "react";
import UserIcon from "../../assets/icons/User";

const UserAvatar = ({ avatar, width = 48, height = 48, className = "" }) => {
  return (
    <>
      {avatar ? (
        <img
          alt="user"
          src={avatar}
          width={width}
          height={height}
          className={className}
        />
      ) : (
        <UserIcon width={width} height={height} color={"custom"} />
      )}
    </>
  );
};

export default UserAvatar;
