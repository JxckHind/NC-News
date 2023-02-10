import { createContext, useState } from "react"

export const TopicOnFilterContext = createContext();

export const TopicOnFilterProvider = (props) => {
    const [filterTopicOnClick, setFilterTopicOnClick] = useState(undefined)

    return (
        <TopicOnFilterContext.Provider value={{ filterTopicOnClick, setFilterTopicOnClick}}>
            {props.children}
        </TopicOnFilterContext.Provider>
        );
}