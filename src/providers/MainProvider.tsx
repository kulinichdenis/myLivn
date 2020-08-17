import React, { useState } from 'react';
import { ApplicationContext } from "../context/application";
import { parserXML, fetchXml, prepareRSS } from "../utils/utils";
import { RssType } from "../types/rss";

interface MainProviderProps {
    children: React.ReactNode;
}

const MainProvider = (props: MainProviderProps) => {
    const [rss, setRss] = useState<RssType[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoader] = useState<boolean>(false);

    const getRss = (url: string) => {
        setError("");
        setLoader(true);
        setRss([]);
        fetchXml(url).then((result: string) => {
            const parsedXML = parserXML(result);
            const preparedRss = prepareRSS(parsedXML);
            setLoader(false);
            setRss(preparedRss);
        }).catch((e: any) => {
            setLoader(false);
            setError("Rss server is not responding, try again");
        });
    };

    return (<ApplicationContext.Provider value={{rss, getRss, error, loading}} {...props} />);
};

export { MainProvider };
