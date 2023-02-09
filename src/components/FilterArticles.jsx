import { useState } from "react";
import "../CSS/FilterArticles.css"

const FilterArticles = ({searchParams, setSearchParams}) => {

    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");

    const params = Object.fromEntries(searchParams.entries());

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedParams = {
            ...params,
            "sort_by" : sortBy,
            "order" : order
        }
        setSearchParams(updatedParams);
    }

    return (
        <section className="filter">
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="sort-by">Sort By: </label>
                    <select id="sort-by" defaultValue="created_at" onChange={(e) => setSortBy(e.target.value)}>
                        <option value="created_at">Date</option>
                        <option value="comment_count">Comment Count</option>
                        <option value="votes">Votes</option>
                    </select>
                </section>
                <section>
                    <label htmlFor="order">Order: </label>
                    <select id="order" defaultValue="desc" onChange={(e) => setOrder(e.target.value)}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </section>
                <button>Filter</button>
            </form>
        </section>
    )
}

export default FilterArticles;