import { useContext, useReducer, createContext } from "react";

const GlobalFilterContext = createContext(null);

const globalFilterFun = (globalFilterDispach, action) => {
  switch (action.type) {
    case "Add to Like":
      return {
        ...globalFilterDispach,
        like: [...globalFilterDispach.like, action.payload],
      };
    case "Remove From Like":
      return {
        ...globalFilterDispach,
        like: globalFilterDispach.like.filter(
          (video) => video._id !== action.payload
        ),
      };

    default:
      return globalFilterDispach;
  }
};

const GlobalFilterContextProvider = ({ children }) => {
  const [globalFilterState, globalFilterDispach] = useReducer(globalFilterFun, {
    history: [],
    like: [],
    watchLater: [],
  });
  return (
    <GlobalFilterContext.Provider
      value={{ globalFilterState, globalFilterDispach }}
    >
      {children}
    </GlobalFilterContext.Provider>
  );
};

const useGlobalFilterContext = () => useContext(GlobalFilterContext);

export { useGlobalFilterContext, GlobalFilterContextProvider };
