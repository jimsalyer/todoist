import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedProjectContextValue {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedProjectContext = createContext<SelectedProjectContextValue | undefined>(undefined);

interface SelectedProjectProviderProps {
  children: ReactNode;
}

export const SelectedProjectProvider: React.FC<SelectedProjectProviderProps> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState<string>('INBOX');

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = (): SelectedProjectContextValue => {
  const context = useContext(SelectedProjectContext);
  if (!context) {
    throw new Error('useSelectedProjectValue must be used within a SelectedProjectProvider');
  }
  return context;
};
