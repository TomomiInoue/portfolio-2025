import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locale } from "../type/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDirection(locale: Locale) {
  if (locale === "ja") {
    return "rtl";
  }
  return "ltr";
}
