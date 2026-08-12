// Common types used throughout the application

export interface Task {
  id: string;
  archived: boolean;
  date: string;
  projectId: string;
  task: string;
  userId: string;
}

export interface Project {
  docId: string;
  name: string;
  projectId: string;
  userId: string;
}

export interface CollatedTask {
  key: string;
  name: string;
}
