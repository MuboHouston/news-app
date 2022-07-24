//useContext hook uses data from NewContextApi file
import React, {useContext} from 'react'
import { NewsContext } from "../NewsContextApi"
import NewsArticle from './NewsArticle';
import ReactPaginate from "react-paginate";

function News(props) {

    const { newsArticles } = useContext(NewsContext);    

    console.log("news", newsArticles)
    const handlePageChange = e => {
        
        console.log("clicked", e.selected)
    };

    return (
        <div>
            <h1>News</h1>
            <div>
                {newsArticles
                ? 
                newsArticles.map(news =>
                    <NewsArticle newsArticles={news} key={news.url} />
                ) : "No news"}
            </div>
            <ReactPaginate
                nextLabel="next"
                previousLabel="previous"
                breakLabel="..."
                forcePage={5}
                pageCount={25}
                marginPagesDisplayed={3}
                pageRangeDisplayed={1}
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

export default News;