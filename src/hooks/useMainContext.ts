import { useContext } from "react";
import { ApplicationContext, ApplicationProps } from "../context/application";

export const useMainContext = () => useContext<ApplicationProps|null>(ApplicationContext);