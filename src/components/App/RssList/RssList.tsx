import React from 'react';
import "./Rss.scss";
import { RssType } from "../../../types/rss";

interface RssListProps {
    list?: RssType[];
}

const RssList = (props: RssListProps) => {
    if(!props?.list?.length) {
        return null;
    }
    return (
        <>
            {props.list.map((news: RssType) => {
                return (
                    <div key={news.id} className="Rss">
                        <div className="title">Title</div>
                        <div className="description">{news.title}</div>
                        <div className="description" dangerouslySetInnerHTML={{__html: news.description}} />
                        <div className="title">Creator:</div>
                        <div className="description">{news.creator}</div>
                        <div className="title">Time:</div>
                        <div className="description">{news.date}</div>
                    </div>
                )
            })}
        </>
    );
};

export default RssList;