import { useMemo, useState, createContext } from 'react';
export const AppContext = createContext({ toggleEditMode: () => { }, isEditMode: false });

export const AppProvider = ({ children }) => {
  const [isEditMode, setEditMode] = useState(false);
  const value = useMemo(
    () => ({
      toggleEditMode: () => {
        setEditMode((prevMode) => !prevMode);
      },
      isEditMode: isEditMode,
    }),
    [isEditMode]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
