/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import { Theme } from "./ConfigTheme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
