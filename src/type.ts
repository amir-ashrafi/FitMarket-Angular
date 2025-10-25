// types/information.ts

export interface InformationMenuMain {
  id: number;
  icon: string;
  name: string;
  link: string;
}

export interface InfoChild {
  id: number | string;
  name: string;
  category?: string;
  children?: InfoChild[];
}

export interface InfoCategory {
  id: number | string;
  name: string;
  category?: string;
  children?: InfoChild[];
}

export interface InformationItem {
  id: number;
  name: string;
  category?: string;
  childern?: InfoChild[];
}
