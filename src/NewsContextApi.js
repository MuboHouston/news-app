import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = "45988b1a90db4c919e91bf44cabba346"
    const query = "bitcoin"

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [data])

    return(
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    )
}
