import { mapRssJsonToList, prepareDate } from "../utils/utils";
import { xmlList, objList } from "./test_data";

describe("utils", () => {
    describe("prepareDate", () => {
        it("should convert date to format DD-MM-YYYY hh:mm", () => {
            let date = prepareDate(new Date("01.02.2020 11:50"));
            expect(date).toBe("02-01-2020 11:50");
        });
        it("should not convert date to format DD.MM.YYYY", () => {
            let date = prepareDate(new Date("01.02.2020 11:50"));
            expect(date).not.toBe("02.01.2020");
        });
    });
    describe("mapRssJsonToList" ,() => {
        it("should make an empty array of rss", () => {
           let arrayOfRss = mapRssJsonToList([]);
           expect(arrayOfRss).toEqual([]);
        });
        it("should make an array of rss", () => {
            let arrayOfRss = mapRssJsonToList(xmlList);
            expect(arrayOfRss).toEqual(objList);
        });
    });
});


