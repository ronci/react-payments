import { useState } from "react";

const useUserName = () => {
  const [userName, setUserName] = useState("");

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  return [userName, onChangeUserName];
};

export default useUserName;