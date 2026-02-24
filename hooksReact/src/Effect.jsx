import React, { useEffect, useState } from "react";

const Effect = ({ name }) => {
  let isAdmin = false;
  let [adminName, setAdminName] = useState("");

  useEffect(() => {
    if (isAdmin === true) {
      setAdminName(name);
    }
  }, [name, isAdmin]);

  return <div>{isAdmin ? `Welcome ${adminName}` : "You are not an admin"}</div>;
};

export default Effect;
