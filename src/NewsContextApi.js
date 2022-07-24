import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const apiKey = "a8a9ac6e602045178b0f07b624b3256a"

    const handleSubmit = e => {
        //prevents the page from reloading
        e.preventDefault();
        setQuery(searchInput)
    }

    useEffect(() => {
        setIsLoading(false)
        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [data, query])

    return(
        <div> 
            <form className="search-form" onSubmit={handleSubmit}>
                <input 
                    placeholder='Search for the news'
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <button type='submit'>Search</button>
            </form>

            {isLoading ? (
                <p>Loading...</p> 
            ) : (
                <NewsContext.Provider value={{ data }}>
                    {props.children}
                </NewsContext.Provider>
            )}
        </div>
    )
}