import { IconType } from "react-icons";

export interface SocialPath {
  icon?: IconType;
  path: string;
}

export interface NavLink extends SocialPath {
  name: string;
}

export interface StatsData {
  endCountNum: number;
  endCountText: string;
  text: string;
}

export interface SchFeature {
  image: string;
  title: string;
  text: string;
  text2?: string;
}

export interface StatType {
  endCountNum: number;
  text: string;
  image: string;
}
