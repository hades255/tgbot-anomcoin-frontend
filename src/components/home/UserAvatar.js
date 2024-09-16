import React from "react";

const UserAvatar = ({ avatar }) => {
  return (
    <>
      <img alt="user" src={avatar} width={48} height={48} />
    </>
  );
};

export default UserAvatar;
