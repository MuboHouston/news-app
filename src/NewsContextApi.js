import React, {createContext, useEffect, useState} from "react";
//makes request to the APIs
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [newsArticles, setNewsArticles] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [totalArticles, setTotalArticles] = useState(0)

    const [query, setQuery] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const apiKey = "fea3b60db0f74c05949c8932953b6681"

    const handleSubmit = e => {
        //prevents the page from reloading
        e.preventDefault();
        setQuery(searchInput)
    }

    useEffect(() => {
        // setIsLoading(true)
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)

                console.log(result)
                let articles = result.data.articles
                let totalResults = result.data.totalResults
                
                setNewsArticles(articles)
                setTotalArticles(totalResults)

            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [query])

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
                <NewsContext.Provider value={{ newsArticles, totalArticles }}>
                    {props.children}
                </NewsContext.Provider>
            )}
        </div>
    )
}