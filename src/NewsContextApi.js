import React, {createContext, useEffect, useState} from "react";
//makes request to the APIs
import axios from "axios";
import ReactPaginate from "react-paginate";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [newsArticles, setNewsArticles] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const [query, setQuery] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const apiKey = "3053171c03544c3ab305aca859b8bbe6"

    const handleSubmit = e => {
        //prevents the page from reloading
        e.preventDefault();
        setQuery(searchInput)
    }

    const fetchMoreArticles = async (currentPage) => {
        const result = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=15&page=${currentPage}`)

        console.log("YES")

        let articles = result.data.articles

        return articles
    }

    console.log("news", newsArticles)

    const handlePageChange = async (e) => {
        // console.log("clicked", e.selected)
        let currentPage = e.selected + 1

        const newPage = await fetchMoreArticles(currentPage);
        // console.log("new page",newPage)
        setNewsArticles(newPage)
    };

    useEffect(() => {
        // setIsLoading(true)
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=15&page=1&sortBy=publishedAt`)

                let articles = result.data.articles
                let totalResults = result.data.totalResults
                console.log("total", totalResults)
                
                setNewsArticles(articles)

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
            <h1>News</h1>
            <div className="form">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input 
                        placeholder='Search for the news'
                        value={searchInput}
                        onChange={event => setSearchInput(event.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>    
            
            {isLoading ? (
                <p>Loading...</p> 
            ) : (
                <NewsContext.Provider value={{ newsArticles, query}}>
                    {props.children}
                </NewsContext.Provider>
            )}

            <ReactPaginate
                nextLabel="next"
                previousLabel="previous"
                breakLabel="..."
                forcePage={5}
                pageCount={10}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}