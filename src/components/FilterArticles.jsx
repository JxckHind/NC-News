import { useContext, useEffect, useState } from "react";
import { TopicOnClickContext } from "../contexts/TopicOnClickContext";
import { TopicOnFilterContext } from "../contexts/TopicOnFilterContext";
import "../CSS/FilterArticles.css"

const FilterArticles = ({searchParams, setSearchParams}) => {

    const {navTopicOnClick} = useContext(TopicOnClickContext);
    const {filterTopicOnClick, setFilterTopicOnClick} = useContext(TopicOnFilterContext);

    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");

    const params = Object.fromEntries(searchParams.entries());

    if (navTopicOnClick !== filterTopicOnClick) {
        document.getElementById("form")?.reset();
    }

    useEffect(() => {
        const updatedParams = {
            ...params,
            "sort_by" : sortBy,
            "order" : order
        }
        setSearchParams(updatedParams);
    }, [sortBy, order])

    const handleReset = (e) => {
        e.preventDefault();
        setSortBy("created_at");
        setOrder("desc");
        document.getElementById("form")?.reset();
    }

    const sortByChange = (sortByValue) => {
        setSortBy(sortByValue);
        setFilterTopicOnClick(params.topic);
    }

    const orderChange = (orderValue) => {
        setOrder(orderValue);
        setFilterTopicOnClick(params.topic);
    }

    return (
        <section className="filter">
            <form onSubmit={handleReset} id="form">
                <section>
                    <label htmlFor="sort-by">Sort By: </label>
                    <select id="sort-by" defaultValue="created_at" onChange={(e) => sortByChange(e.target.value)}>
                        <option value="created_at">Date</option>
                        <option value="comment_count">Comment Count</option>
                        <option value="votes">Votes</option>
                    </select>
                </section>
                <section>
                    <label htmlFor="order">Order: </label>
                    <select id="order" defaultValue="desc" onChange={(e) => orderChange(e.target.value)}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </section>
                <button>Reset</button>
            </form>
        </section>
    )
}

export default FilterArticles;