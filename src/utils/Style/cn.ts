import clsx, { type ClassValue } from "clsx";
import { customTwMerge } from "./customTwMerge";

export const cn = (...inputs: ClassValue[]): string => {
  return customTwMerge(clsx(inputs));
};
