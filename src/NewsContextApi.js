import React, {createContext, useEffect, useState} from "react";
//makes request to the APIs
import axios from "axios";
import ReactPaginate from "react-paginate";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [newsArticles, setNewsArticles] = useState()
    const [pageCount, setPageCount] = useState(0)

    const [query, setQuery] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const apiKey = "a77aa47aaf354a39a070a70db9b705ea"

    const handleSubmit = e => {
        //prevents the page from reloading
        e.preventDefault();
        setQuery(searchInput)
    }

    const fetchMoreArticles = async (currentPage) => {
        const result = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=15&page=${currentPage}`)

        let articles = result.data.articles

        return articles
    }

    // console.log("news", newsArticles)

    const handlePageChange = async (e) => {
        // console.log("clicked", e.selected)
        let currentPage = e.selected + 1

        const newPage = await fetchMoreArticles(currentPage);
        // console.log("new page",newPage)
        setNewsArticles(newPage)
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=15&page=1&sortBy=popularity`)

                let articles = result.data.articles
                let totalResults = result.data.totalResults
                // console.log("total", totalResults)
                setPageCount(Math.ceil(totalResults/15))

                
                setNewsArticles(articles)

            } catch (err) {
                console.log(err)
            } 
        }
        fetchData()
    }, [query])

    return(
        <div> 
            <div className="header">
                <h1 className="title">News Connection</h1>
                <h4 className="title-sub">We connect you with news from around the world!</h4>
                <div className="form">
                    <form className="search-form m-5" onSubmit={handleSubmit}>
                        <input 
                            className="input-form"
                            placeholder='Search for the news'
                            value={searchInput}
                            onChange={event => setSearchInput(event.target.value)}
                        />
                        <br /> 
                        <br />
                        <button className="form-btn p-2 mt-3 rounded" type='submit'>Search</button>
                    </form>
                </div>    
            </div>
 
                <NewsContext.Provider value={{ newsArticles, query}}>
                    {props.children}
                </NewsContext.Provider>

            <ReactPaginate
                nextLabel="next"
                previousLabel="previous"
                breakLabel="..."
                pageCount={pageCount}
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