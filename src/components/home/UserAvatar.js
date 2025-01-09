import React, { useCallback, useState } from "react";
import clsx from "clsx";
import UserIcon from "@icons/User";

const UserAvatar = ({ avatar, width = 48, height = 48, className = "" }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = useCallback(() => setLoading(false), []);

  return (
    <>
      {avatar && (
        <img
          alt="user"
          src={avatar}
          width={width}
          height={height}
          className={clsx(className, { hidden: loading })}
          onLoad={handleImageLoad}
        />
      )}
      {loading && <UserIcon width={width} height={height} color={"custom"} />}
    </>
  );
};

export default UserAvatar;
