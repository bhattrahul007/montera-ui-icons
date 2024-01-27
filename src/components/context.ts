import * as React from "react";
import { IconContextProps } from "./types";

export const DefaultContext: IconContextProps = {
  color: "currentColor",
  size: "1rem",
  className: undefined,
  style: undefined,
  attr: undefined,
};

export const IconContext: React.Context<IconContextProps> =
  React.createContext && React.createContext(DefaultContext);
