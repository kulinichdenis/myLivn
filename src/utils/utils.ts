import { xmlToJson } from "./xmlToJson";
import { RssType } from "../types/rss";

export const mapRssJsonToList = (xml: any[]): RssType[] => {
    return xml.map((item: any, index: number) => {
        return ({
            id: index + 1,
            title: item.title['#cdata-section'] || item.title || "",
            description: item.description['#cdata-section'] || item.description || "",
            date: prepareDate(new Date(item.pubDate)) || "",
            creator: item['dc:creator'] || ""
        });
    });
};

export const fetchXml = (url: string): Promise<any> => {
    let request = process.env.NODE_ENV === "development" ? `/api?url=${url}` : url;
    return fetch(request, {method: 'GET', cache: 'no-cache'})
        .then((res) => {
            if (res.ok) {
                return res.text();
            }
            console.log(res.status, "status error");
            throw(res.status);
        });
};

export const parserXML = (xml: string): any => {
    return new DOMParser().parseFromString(xml, 'text/xml');
};

export const prepareRSS = (parsedXMl: any): RssType[] => {
    const xmlJson = xmlToJson(parsedXMl);
    // @ts-ignore
    return mapRssJsonToList(xmlJson?.rss?.channel?.item || []);
};

export const prepareDate = (date: Date): string => {
    let preparedDate = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    return preparedDate;
};