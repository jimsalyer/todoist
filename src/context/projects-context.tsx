import React, { createContext, useContext, ReactNode } from 'react';
import { useProjects } from '../hooks';
import { Project } from '../types';

interface ProjectsContextValue {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const ProjectsContext = createContext<ProjectsContextValue | undefined>(undefined);

interface ProjectsProviderProps {
  children: ReactNode;
}

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = (): ProjectsContextValue => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsValue must be used within a ProjectsProvider');
  }
  return context;
};
