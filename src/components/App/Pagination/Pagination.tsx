import React, { useEffect, useState } from 'react';
import Button from "../../Common/Button";
import { useMainContext } from "../../../hooks/useMainContext";
import "./Pagination.scss";

interface PaginationProps {
    range: number;
    children: React.ReactElement;
}

interface PaginationState {
    endList: number,
    startRange: number,
    endRange: number,
    list: any[],
}

const Pagination = (props: PaginationProps) => {
    const context = useMainContext();
    const rss  = context?.rss || [];
    const [pagination, setCurrengPagination] = useState<PaginationState>({
        endList: 0,
        startRange: 0,
        endRange: 0,
        list: [],
    });

    useEffect(() => {
        setCurrengPagination({
            endList: rss.length,
            startRange: 0,
            endRange: props.range,
            list: rss.slice(0, props.range),
        });
    }, [rss]);

    if(!rss.length) {
        return null;
    }

    const clickOnNext = () => {
        let nextStartRange = pagination.startRange + props.range;
        let nextEndRange = pagination.endRange + props.range;
        setCurrengPagination({
            ...pagination,
            startRange: nextStartRange,
            endRange: nextEndRange,
            list: rss.slice(nextStartRange, nextEndRange),
        });
    };

    const clickOnPrev = () => {
        let nextStartRange = pagination.startRange - props.range;
        let nextEndRange = pagination.endRange - props.range;
        setCurrengPagination({
            ...pagination,
            startRange: nextStartRange,
            endRange: nextEndRange,
            list: rss.slice(nextStartRange, nextEndRange),
        });
    };

    return (
        <div className="Pagination">
            {React.cloneElement(props.children,{list: pagination.list})}
            <Button disabled={pagination.startRange === 0} onClick={clickOnPrev}>Prev</Button>
            &nbsp;&nbsp;
            <Button disabled={pagination.endRange >= pagination.endList} onClick={clickOnNext}>Next</Button>
        </div>
    );
};

export default Pagination;