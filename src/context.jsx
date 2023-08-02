import React, { useContext, useState } from "react";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Appcontext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};
export { Appcontext, AppProvider };
