import { Emoji } from "./src/types";

declare module "emoji.json" {
  const value: Emoji[];
  export default value;
}
