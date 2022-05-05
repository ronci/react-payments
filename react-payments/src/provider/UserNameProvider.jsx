import { createContext, useState } from "react";
import { isOverMaxLength } from "../util/validator";
import { MAX_LENGTH } from "../constants";

export const UserNameContext = createContext();

const initialUserName = "";

const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState(initialUserName);

  const onChangeUserName = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
      return;
    }
    setUserName(target.value);
  };

  const resetUserName = () => {
    setUserName(initialUserName);
  };

  return (
    <UserNameContext.Provider
      value={{
        state: { userName },
        action: { onChangeUserName, resetUserName },
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
