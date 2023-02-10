import { createContext, useState } from "react"

export const TopicOnClickContext = createContext();

export const TopicOnClickProvider = (props) => {
    const [navTopicOnClick, setNavTopicOnClick] = useState(undefined);

    return (
        <TopicOnClickContext.Provider value={{ navTopicOnClick, setNavTopicOnClick}}>
            {props.children}
        </TopicOnClickContext.Provider>
        );
}