// src/types/index.ts

// スキル関連の型
export interface Skill {
    name: string;
    level: number;
  }
  
  // プロジェクト関連の型
  export type ProjectCategory = 'web' | 'app' | 'design';
  export type FilterType = 'all' | ProjectCategory;
  
  export interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    image: string;
    description: string;
    technologies: string[];
    link: string;
  }
  
  // コンタクトフォーム関連の型
  export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export interface FormStatus {
    submitted: boolean;
    error: boolean;
    message: string;
  }