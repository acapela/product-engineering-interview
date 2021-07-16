import { UnicodeString } from "../types";

export function toEmoji(unicode: UnicodeString) {
  return unicode
    .split("-")
    .map((val: string) => {
      const asCodePoint = parseInt(val, 16);
      return String.fromCodePoint(asCodePoint);
    })
    .join("");
}
