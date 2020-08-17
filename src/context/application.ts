import { createContext } from "react";
import { RssType } from "../types/rss";

export interface ApplicationProps {
    rss: RssType[];
    getRss: (url: string) => void;
    error: string;
    loading: boolean;
}

export const ApplicationContext = createContext<ApplicationProps|null>(null);